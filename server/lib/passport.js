var shortid = require("shortid");
const url = require('url');
const querystring = require('querystring');
var {
    User
} = require("../models");

var id;
var email;
var display_name;
var google_id;

module.exports = function (app) {




    var passport = require("passport"),
        LocalStrategy = require("passport-local").Strategy,
        GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function (user, done) {
        //구글 로그인정보가 넘어옴
        //  console.log('serializeUser', user)
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        console.log("id", id);

        User.findOne({
            where: {
                id: id
            }
        }).then((project) => {

            done(null, project);
            // project는 Project 테이블에서 title이 'aProject'인 첫번째 항목 || 또는 null
        });

    });



    var googleCredentials = require("../config/google.json");
    // console.log(googleCredentials.web.client_id);
    passport.use(
        new GoogleStrategy({
                clientID: googleCredentials.web.client_id,
                clientSecret: googleCredentials.web.client_secret,
                callbackURL: googleCredentials.web.redirect_uris[0],
                passReqToCallback: true,
            },
            function (request, accessToken, refreshToken, profile, done) {
                //  console.log('Googlestragey', accessToken, refreshToken, profile)
                email = profile.emails[0].value;
                console.log("email is ", profile._json);
                request.id = profile._json;
                //console.log("accaccess",request.accessToken);

                user = {
                    id: shortid.generate(),
                    email: email,
                    displayName: profile.displayName,
                    googleId: profile.id,
                };
                id = user.id;
                email = user.email;
                display_name = user.displayName,
                    google_id = profile.id

              
                done(null, user)
               
            }
        )
    );

    app.get(
        "/auth/google",
        passport.authenticate("google", {
            // scope: 'https://www.google.com/m8/feeds' //기능들 허용하는거
            scope: ["https://www.googleapis.com/auth/plus.login", "email"],
        })
    );

    app.get(
        "/auth/google/callback",
        passport.authenticate("google", {
            failureRedirect: "/auth/login",
        }),
        function (req, res) {
          
            res.redirect('/');
        }
    );

    app.get('/login_process', (req, res) => {
        console.log('req', req.query.id)
        console.log('req', req.query.email)

      
        res.json(user_info = {
            id: req.query.id,
            email: req.query.email,
            display_name: req.query.display_name,
            google_id: req.query.google_id

        })
    })
    app.get('/user_info', (req, res) => {

        res.json({
            user_info: {
                id: id,
                email: email,

                display_name: display_name,
                google_id: google_id

            }
        })
    })


    return passport;
};