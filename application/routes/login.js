var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'login' });
});

/* POST */
// PRIORITY 1
router.post('/', function(req, res, next) {
  console.log(`POST: 'login' --> ${req.body}`)
  res.sendStatus(200)
});

module.exports = router;