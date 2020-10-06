var express = require('express');
var router = express.Router();

/* GET test page. */
router.get('/', function(req, res, next) {
  res.render('test', { title: 'Test' });
});

router.post('/put', function(req, res, next) {
  console.log("DATABASE PUT")
  res.render('test', { title: 'Test' });
});

router.post('/get', function(req, res, next) {
  console.log("DATABASE GET")
  res.render('test', { title: 'Test' });
});

module.exports = router;
