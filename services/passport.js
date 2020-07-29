const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GithubStartegy = require('passport-github').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const { use } = require('passport');

const User = mongoose.model('users');

//SerializeUser take user who is trying to login and turn it into a cookie and store it in the browser.
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//deserializeUser take id find it in the database and give it to the browser.
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        // We already have a record for given id
        return done(null, existingUser);
      }
      // We do not have any user with given id. Create one
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);

passport.use(
  new GithubStartegy(
    {
      clientID: keys.githubClientID,
      clientSecret: keys.githubCLientSecret,
      callbackURL: '/auth/github/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ githubID: profile.id }).then((existingUser) => {
        if (existingUser) {
          // We already have a record for given id
          done(null, existingUser);
        } else {
          // We do not have any user with given id. Create one
          new User({ githubID: profile.id }).save().then((user) => {
            done(null, user);
          });
        }
      });
    }
  )
);
