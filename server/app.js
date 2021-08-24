var createError = require("http-errors");
var express = require("express");
const cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var apiRouter = require("./routes/api");
var { sequelize } = require("./models/index");
var app = express();
sequelize.sync();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 3002;
const domain = "http://www.aqua-talk.shop/";

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//USE MIDDLEWARE
app.use(cors({ origin: "http://www.aqua-talk.shop:3002/"}));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//USE MYMIDDLEWARE
app.use("/api", apiRouter);

//passport
const passport = require("./lib/passport")(app);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});



module.exports = app;
