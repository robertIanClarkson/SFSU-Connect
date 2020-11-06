var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

/* POST */
// PRIORITY 1
router.post('/', function(req, res, next) {
  console.log(`POST: 'register' --> ${JSON.stringify(req.body)}`)
  res.sendStatus(200)
});

module.exports = router;