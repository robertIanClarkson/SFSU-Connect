const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const login = require('./../../db/login')

//set up database actions for user

passport.serializeUser((user, done) => {
  // console.log(user)
  console.log('serialize')
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log('deserialize')
  login.getUserWithID(id)
    .then(({ id, username }) => done(null, { id, username }))
    .catch(error => done(error));
});

// Login
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false
},
function(username, password, done) {
  console.log('use')
  let email = username // passport bullshit
  login.getUserWithEmail(email)
    .then((user) => {
      if(user.password == password) {
        return done(null, {
          id: user.id, 
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name
        })
      } else {
        return done(null, false, {
          error: 'password incorrect'
        })
      }
    })
    .catch((err) => {
      console.log(err)
      done(null, false, {
        error: 'email incorrect'
      })
    })
}
));

module.exports = passport;