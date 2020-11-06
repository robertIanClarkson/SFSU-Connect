var express = require('express');
var router = express.Router();

router.get('/inbox', function(req, res, next) {
  res.render('inbox', { title: 'inbox' });
});