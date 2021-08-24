var express = require('express');
var router = express.Router();


var jwt = require('jsonwebtoken');
var jwtSecret = 'secret';
var models = require('../models');


/***********************************
 *           FB Login              *
 ***********************************/
/*
 router.post('/login/facebook', function(req, res, next) {
    var fbUserEmail = req.body.fbUserEmail;
    var fbAccessToken = req.body.fbAccessToken;

    var findConditionfbUserEmail = {
        email: fbUserEmail
    }
    users.findOne(findConditionfbUserEmail)
        .exec(function (err, user) {
            if (err){
               res.json({
                   type: false,
                   data: "Error occured " + err
               });
            }
            else if (!user){
                console.log('user not found');
                fbSignup(fbUserEmail, fbAccessToken, function (err, savedUser) {
                    console.log(1);
                    if (err){
                        res.json({
                            type: false,
                            data: "Error occured " + err
                        });
                    } else {
                        res.json({
                            type: true,
                            data: savedUser,
                            token: savedUser.jsonWebToken
                        });
                    }
                });
            }
            else if (user) {
                console.log('user');
                console.log(user);
                user.fbToken = fbAccessToken;
                user.save(function (err, savedUser) {
                    res.json({
                        type: true,
                        data: user,
                        token: user.jsonWebToken
                    }); 
                });
            }
        });
});

*/

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

router.post('/login/info', async (req, res, next) => {

    var email = req.body.email
    var userid = req.body.userid
    var username = req.body.username
    var gtoken = req.body.gtoken

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


    models.user.findOrCreate({
            where: {
                email: req.body.email
            },
            defaults: {
                userid: userid,
                username: username,
                gtoken: gtoken
            }
        })

        .then((user, created) => {
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
                                
                                token: token
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

        })



    // res.json({islogin:"true"}) 

})
router.post('/login/info2', function (req, res, next) {

    res.json({
        islogin: "true"
    })
})

router.post('/login/info3')

module.exports = router;