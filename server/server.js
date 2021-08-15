var express = require('express');
var app = express();
const http = require('http');
const server = http.createServer(app);

var indexRouter = require('./routes/index');

app.use('/', indexRouter);

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
  server.listen(3002, function(){ console.log('서버 실행중...'); });
  
  