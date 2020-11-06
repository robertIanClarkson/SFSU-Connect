const e = require('express');
var express = require('express');
var router = express.Router();
var db = require('./../db/login')

/* GET */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/* POST */
// PRIORITY 1
router.post('/', function(req, res, next) {
  console.log(`POST: 'login' --> ${JSON.stringify(req.body)}`)
  db.checkEmail(req.body.email)
    .then((isEmail) => {
      if(isEmail) {
        // email exist
        db.checkPassword(req.body.email, req.body.password)
          .then((isPassword) => {
            if(isPassword) {
              // password correct
              // AUTHENTICATED
              res.render('login', {
                title: 'Login',
                error: 'success'
              })
            } else {
              // password incorrect
              res.render('login', {
                title: 'Login',
                error: 'email or password incorrect'
              })
            }
          })
          .catch((errno) => {
            console.log(`POST: 'login' --> checkPassword: ${errno}`)
            res.sendStatus(500)
          })
      } else {
        // email doesn't exist
        res.render('login', {
          title: 'Login',
          error: 'email or password incorrect'
        })
      }
    })
    .catch((errno) => {
      console.log(`POST: 'login' --> checkEmail: ${errno}`)
      res.sendStatus(500)
    })
});

module.exports = router;