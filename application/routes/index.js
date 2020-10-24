var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* http://localhost:3000/test */
router.get('/thankyouforposting', function(req, res, next) {
  res.render('thankyouforposting', { title: 'thankyouforposting' });
});

module.exports = router;
