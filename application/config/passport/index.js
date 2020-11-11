const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const login = require('./../../db/login')

//set up database actions for user

passport.serializeUser((user, done) => {
  // console.log('serialize')
  done(null, user);
});

passport.deserializeUser((user, done) => {
  // console.log('deserialize')
  // console.log(user)
  done(null, user)
  // login.getUserWithID(user.id)
    // .then((user) => done(null, user))
    // .catch(error => done(new Error(error), false));
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
      // console.log(user)
      if(user.password == password) {
        // console.log('match')
        return done(null, {
          id: user.id, 
          name: user.name,
          email: user.email
        })
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