var express = require('express');
var router = express.Router();
var passport = require('./../config/passport')
var db = require('./../db/login')

/* GET */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/* POST */
// PRIORITY 1
router.post('/', passport.authenticate('local', {
  successRedirect: '/',
  function(req, res) {
    console.log('hello')
    res.redirect('/');
  }
}))

module.exports = router;