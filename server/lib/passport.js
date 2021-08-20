var shortid = require("shortid");
var { User } = require("../models");

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
    User.findOne({ where: { id: id } }).then((project) => {
      //세션이랑 체크함
      //  console.log("work",project)
      // var user = db.get('users').find({
      //     id: id
      //  }).value()
      //  console.log('deserializeUser', id,"datavalues", project.dataValues)
      done(null, project);
      // project는 Project 테이블에서 title이 'aProject'인 첫번째 항목 || 또는 null
    });
    //select id from users where id=asdasdsa;
    //console.log("work")
    // var user = db.get('users').find({
    //     id: id
    //  }).value()
    // console.log('deserializeUser', id, user)
    // done(null, user);
  });

  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "pwd",
      },
      function (email, password, done) {
        console.log("localStrategy", email, password);
        /*
        var user =

        db.get('users').find({
            email: email,
            password: password
        }).value(); //key:value

        if (user) {
            return done(null, user, {
                message: 'Welcome.'
            });
        } else {
            return done(null, false, {
                message: 'Incorrect user information.'
            });
        }
            */
      }
    )
  );

  var googleCredentials = require("../config/google.json");
  // console.log(googleCredentials.web.client_id);
  passport.use(
    new GoogleStrategy(
      {
        clientID: googleCredentials.web.client_id,
        clientSecret: googleCredentials.web.client_secret,
        callbackURL: googleCredentials.web.redirect_uris[0],
      },
      function (accessToken, refreshToken, profile, done) {
        //  console.log('Googlestragey', accessToken, refreshToken, profile)
        var email = profile.emails[0].value;
        console.log("email is ", email);
        // var user = db.get('users').find({
        //     email: email
        // }).value();
        // if (user) {
        //     user.googleId = profile.id;
        //     db.get('users').find({
        //         id: user.id
        //     }).assign(user).write();
        // } else {
        //     user = {
        //         id: shortid.generate(),
        //         email: email,
        //         displayName: profile.displayName,
        //         googleId: profile.id

        //     }
        //     //.FindOrCreate(options: Object)
        //     db.get('users').push(user).write();
        // }
        var user = {
          id: shortid.generate(),
          email: email,
          displayName: profile.displayName,
          googleId: profile.id,
        };

        User.findOrCreate({
          where: { email: email },
          defaults: user,
        })
          .then((rows) => {
            //done(null, rows)
            // console.log("thenrow",rows[0])
            done(null, rows[0]);
          })
          .catch((err) => {
            // Do something
          });
        // done(null, user)
        // console.log("email is",email);
        //   User.findOrCreate({
        //      googleId: profile.id
        // }, function (err, user) {
        //        return done(err, user);
        //   });
      }
    )
  );
  app.get("/auth/google", (req, res, next) => {
    console.log("성공");
    next();
  });
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
      req.session.save(function () {
        //console.log()
        res.redirect("/");
      });
      // res.redirect('/');
    }
  );

  return passport;
};