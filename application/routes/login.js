var express = require('express');
var router = express.Router();
var passport = require('./../config/passport')
var db = require('./../db/login')

/* GET */
router.get('/', function(req, res, next) {
  if (req.isAuthenticated()) {
    res.redirect('/')
  } else {
    res.render('login', { title: 'Login' });
  }
});

/* POST */
// PRIORITY 1
router.post('/', function(req, res, next) {
  // GO TO 'config/passport' --> passport.use()
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) {
      // FAILED
      return res.render('login', {
        title: 'Login',
        error: 'Email or Password Incorrect'
      }); 
    }
    req.logIn(user, function(err) {
      console.log(user)
      console.log(err)
      if (err) { return next(err); }
      // SUCCESS
      return res.redirect('/')
    });
  })(req, res, next);
});

module.exports = router;