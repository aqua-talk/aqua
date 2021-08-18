/* 기본 서버 구동 셋팅 */
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const PORT = 3002;

var session = require("express-session");
var FileStore = require("session-file-store")(session);

/* 구글 패스포트 */
app.use(
  session({
    //상태유지를 하면서 보안까지유지하려면
    secret: "asadlfkj!@#!@#dfgasdg",
    resave: false,
    saveUninitialized: true,
    store: new FileStore(),
  })
);
const passport = require("./lib/passport")(app);

const sequelize = require("./models").sequelize;

/* 라우팅 */
app.get("*", function (request, response, next) {
  next();
});

//sequelize.sync();
const indexRouter = require("./routes/index");
const topicRouter = require("./routes/topic");
const authRouter = require("./routes/auth")(passport);
//const chattingRouter = require("./routes/chatting")(io);

app.use("/", indexRouter);
//app.use("/topic", topicRouter);
// app.use("/auth", authRouter);
//app.use("/chatting", chattingRouter);

/* 에러 출력 */
app.use(function (req, res, next) {
  res.status(404).send("Sorry cant find that!");
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

/* 서버 실행 */
server.listen(PORT, function () {
  console.log("서버 실행중...");
});
