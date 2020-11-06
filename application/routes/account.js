var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('account', { title: 'Account' });
});

router.get('/items', function(req, res, next) {
  res.render('inbox', { title: 'inbox' });
});

router.get('/inbox', function(req, res, next) {
  res.render('inbox', { title: 'inbox' });
});

module.exports = router;