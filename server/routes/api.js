var express = require('express');
var router = express.Router();

var users = require('./../model/user');
var jwt = require('jsonwebtoken');
var jwtSecret = 'secret';
var models = require('../models');
const {
    deleteOne
} = require('./../model/user');


/*
function Signup(Email, Token, next) {
    var userModel = new user();
    userModel.email = Email;
    userModel.gtoken = Token;
    userModel.save(function (err, newUser) {
        newUser.jsonWebToken = jwt.sign(newUser, jwtSecret);
        newUser.save(function (err, savedUser) {
            next(err, savedUser);
        });
    });
}
*/


router.post('/login/info',  (req, res, next) => {

    var email = req.body.email
    var userid = req.body.userid
    var username = req.body.username
    var gtoken = req.body.gtoken
    var friend_list_array=new Array();
    models.User
    .findOrCreate({
        where: {
            email: req.body.email
        },
        defaults: {
            userid: userid,
            username: username,
            gtoken: gtoken
        }
    })

    .then((user_info) => {
        models.Is_friend.findAll({
            where:{
                email:user_info[0].dataValues.email
            }
        })
        .then((friend_list) =>{
            for(i=0;i<friend_list.length;i++){
            //console.log(friend_list[i].dataValues.friend)
             friend_list_array[i]=friend_list[i].dataValues.friend;
           
            }
            //가입할떄 default 사진으로 사용되게 img url로 사용할수 있께 같이전송
            //해야되는거 select 이메일 반환하는 where문 name쓰게 
            console.log(friend_list_array)
            res.json({
                user_info: {
                    
                    email: user_info[0].dataValues.email,
                    userid: user_info[0].dataValues.userid,
                    username: user_info[0].dataValues.username,
                    gtoken: user_info[0].dataValues.gtoken
                    
    
                },
                friend_list:friend_list_array
                    
                
            })
        })   

      
    })
})
//친구추가
router.post('/add_friend',  (req, res, next) => {

    models.Is_friend
    .findOrCreate({
        where:{
            email:req.body.email,
            friend:req.body.friend
        }
    })
    .then((is_success) =>{
        res.send("성공")    
    })
    
    res.send("성공") 
    
})


//삭제 추가할예정 내용수정되야됨
router.post('/delete_friend',  (req, res, next) => {

    models.Is_friend
    .findOrCreate({
        where:{
            email:req.body.email,
            friend:req.body.friend
        }
    })
    .then((is_success) =>{
        res.send("성공")    
    })
    
    res.send("성공") 
    
})





    //console.log("email",req.headers)
    // console.log("userId", req.body)

    //console.log("userName",userName)
    //console.log("gToken",gToken)
    /*
    models.user.create({

        email : email,
        userid :userid,
        username:username,
        gtoken:gtoken
    }).then(result => {
    	console.log("success");
    })
    .catch(err => {
    	console.log("fail");
    })
    res.json({islogin:"true"})

*/


  

            
            /*
            console.log()
            try {
                //res.json({islogin:"true"})
                const token = jwt.sign({
                    userid,
                    username

                }, "JwTsEcReTkEyOrHaShInG", {
                    expiresIn: '1m', // 1분
                    issuer: '토큰발급자',
                });


                console.log('user[0]', user[0].email)
                if (!user[0]) {
                    Signup(email, gtoken, function (err, savedUser) {
                        console.log(1, user);
                        if (err) {
                            console.log(2);
                            res.json({
                              //  type: false,
                                data: "Error occured " + err
                            });
                        } else {
                            console.log(3);
                            res.json({
                              //  type: true,
                                eamil: savedUser.email,
                                userid: savedUser.userid,
                                username: savedUser.username,
                                token: save.gtoken
                            });
                        }
                    });
                } else if (user[0]) {
                    // console.log('user');
                    console.log(4, user);

                    //  console.log(user);
                    //   user.fbToken = fbAccessToken;
                    //   user.save(function (err, savedUser) {
                    res.json({
                       // type: true,
                        email: user[0].email,
                        userid: user[0].userid,
                        username: user[0].username,
                        token: token
                        // }); 
                    });
                }

            } catch (error) {
                console.error(error);
                return res.status(500).json({
                    code: 500,
                    message: error
                });
            }
*/
        



    // res.json({islogin:"true"}) 


router.post('/login/info2', function (req, res, next) {

    res.json({
        islogin: "true"
    })
})

router.post('/login/info3')

module.exports = router;