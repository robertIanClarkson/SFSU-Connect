const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const login = require('./../../db/login')

//set up database actions for user

passport.serializeUser((user, done) => {
  console.log('serializeuser')
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log('deserializeuser')
  login.getUserWithID(id)
    .then(({ id, username }) => done(null, { id, username }))
    .catch(error => done(error));
});

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false
},
function(username, password, done) {
  console.log('hello')
  let email = username // passport bullshit
  login.getUserWithEmail(email)
    .then((user) => {
      if(user.password == password) {
        let id = user.id
        return done(null, {id, username})
      } else {
        return done(null, false, {
          error: 'password incorrect'
        })
      }
    })
    .catch((err) => {
      done(null, false, {
        error: 'email incorrect'
      })
    })
}
));

module.exports = passport;