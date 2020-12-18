/**
 * Express routers for the registration page
 */

var express = require('express');
var router = express.Router();
var db = require('./../db/register')

router.get('/', function(req, res, next) {
  if (req.isAuthenticated()) {
    res.redirect('/')
  } else {
    res.render('register', { title: 'Register' });
  }
});

// URL where the registration form gets posted
router.post('/', function(req, res, next) {
  console.log(`POST: 'register' --> ${JSON.stringify(req.body)}`)
  db.newUser(req.body.name, req.body.email, req.body.password)
  .then((result) => {
    console.log(`register --> ${result}`)
    res.render('login', {
      title: 'Login',
      error: "You are registered! Just login"
    })
  })
  .catch((errno) => {
    console.log(`Register Error: ${errno}`)
    let error = "Error"
    if(errno == 1062) { error = "That email address is taken, Sorry" }
    res.render('register', {
      title: 'Register',
      error: error
    })
  }) 
   
});

module.exports = router;