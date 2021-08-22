var express = require('express');
var router = express.Router();
var path = require('path');
var auth = require('../lib/auth');

//const io=require('socket.io')(3001)
var {
    User,Message
} = require('../models');


module.exports = function (io) {


 
    router.get('/', (req, res) => {
        if (auth.isOwner(req, res)) {

        res.sendFile(path.join(__dirname, "../working_folder", "index2.html"))
         // res.render('chat');
           // console.log(__dirname); //현재 파일위치 정보
        } else {
            res.send("잘못된 접근입니다.")
        }
    })
    router.get('/search',(req,res)=>{
        Message.findAll().then((results) =>{
            res.json(results)
    })
        
        
          
    })

    router.get('/findmyid',(req,res)=>{
        res.send(req.user.displayName)
    })
   

    let room = ['room1', 'room2'];
    let a=0;
    io.on('connection', (socket) => {
        socket.on('disconnect', () => {
          console.log('user disconnected');
        });
      
      
        socket.on('leaveRoom', (num, name) => {
          socket.leave(room[num], () => {
            console.log(name + ' leave a ' + room[num]);
            io.to(room[num]).emit('leaveRoom', num, name);
          });
        });
      
      
        socket.on('joinRoom', (num, name) => {
          socket.join(room[num], () => {
            console.log(name + ' join a ' + room[num]);
            io.to(room[num]).emit('joinRoom', num, name);
          });
        });
      
      
        socket.on('chat message', (num, name, msg) => {
          a = num;
          io.to(room[a]).emit('chat message', name, msg);
        });
      });
    /*
    io.on('connection', (socket) => {

        socket.on('request_message', (msg) => { //클라이언트에서 메시지 송출  ->서버에서req 확인
            //io.emit('response_message', msg); //모든 유저에게 emit한다(메시지 송출) -> 클라이언트에서 메시지확인하고->결과 그리기
            //socket.io에서는 req/res 개념이 별루없음 양방향 통신ㅇ기ㅣ떄문에 
            //User.findOne({ where: {id:} }).then(project => {
            

        
        
        Message.create({
           
           name:"f",message:msg
        })
        .then((rows) => {
            //done(null, rows)
            // console.log("thenrow",rows[0])
            io.emit('response_message', msg);
          
            
        })
        .catch((err) => {
            // Do something
        });

           // })
        });

        socket.on('disconnect', async () => {
            console.log('user disconnected');
        });
    });

*/



    return router;
}