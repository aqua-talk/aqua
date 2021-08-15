var express = require('express');
var sequelize = require('./models').sequelize;

var app = express();
const http = require('http');
const server = http.createServer(app);

var fs = require('fs');
var bodyParser = require('body-parser');
var compression = require('compression');
var helmet = require('helmet')
app.use(helmet());
var session = require('express-session')
var FileStore = require('session-file-store')(session)
var flash = require('connect-flash');

const io=require('socket.io')(server)
/*좀다뺴세요 */
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));
//app.use(express.static('working_folder'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(compression());
app.use(session({       //상태유지를 하면서 보안까지유지하려면
  secret: 'asadlfkj!@#!@#dfgasdg',
  resave: false,
  saveUninitialized: true,
  store: new FileStore()
}))
app.use(flash());

var passport = require('./lib/passport')(app);

app.get('*', function (request, response, next) {
// request.list = db.get('topics').take(100).value(); //take 이렇게 써야됨 안그러면 db박살남

    next();
});
sequelize.sync();
var indexRouter = require('./routes/index');
var topicRouter = require('./routes/topic');
var authRouter = require('./routes/auth')(passport);
var chattingRouter= require('./routes/chatting')(io);








app.use('/', indexRouter);
app.use('/topic', topicRouter);
app.use('/auth', authRouter);
app.use('/chatting',chattingRouter);

app.use(function (req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// });
server.listen(3000, function(){ console.log('서버 실행중...'); });

