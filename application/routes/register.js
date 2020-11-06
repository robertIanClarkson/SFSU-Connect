var express = require('express');
var router = express.Router();
var db = require('./../db/register')

/* GET */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

/* POST */
// PRIORITY 1
router.post('/', function(req, res, next) {
  console.log(`POST: 'register' --> ${JSON.stringify(req.body)}`)
  db.newUser(req.body.first, req.body.last, req.body.email, req.body.password)
    .then((result) => {
      console.log(`register --> ${result}`)
      res.render('landing', {
        title: 'Home'
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