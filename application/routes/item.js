var express = require('express');
var router = express.Router();

router.get('/postitem', function(req, res, next) {
  res.render('postitem', { title: 'PostingItem' });
});