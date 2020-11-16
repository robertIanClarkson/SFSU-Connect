const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const login = require('./../../db/login')

//set up database actions for user

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user)
});

// Login
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
function(username, password, done) {
  let email = username // passport bullshit
  login.getUserWithEmail(email)
    .then((user) => {
      if(user.password == password) {
        delete user.password
        // console.log(user)
        return done(null, user)
      } else {
        return done(null, false)
      }
    })
    .catch((err) => {
      console.log(err)
      done(null, false)
    })
}
));

module.exports = passport;