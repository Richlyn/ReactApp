const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth");
const keys = require("./keys");
const User = require('../models/User');

passport.use(
 new GoogleStrategy(
    {
      // options for strategy
      callbackURL: "/api/users/google/redirect",
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret
    },
    (accessToken,refreshToken,profile,done) => { 
      // passport callback function
      User.findOne({ 'google.id': profile.id }, function(err, user) {
        if (err)
          return done(err);
        if (user) {
          return done(null, user);
        } else {
          var newUser = new User();
          newUser.google.id = profile.id;
          newUser.google.token = token;
          newUser.google.name = profile.displayName;
          newUser.google.email = profile.emails[0].value;
          newUser.save(function(err) {
            if (err)
              throw err;
            return done(null, newUser);
          });
        }
     })})
     )