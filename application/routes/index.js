var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* http://localhost:3000/navbar */
router.get('/navbar', function(req, res, next) {
  res.render('navbar', { title: 'navbar' });
});

module.exports = router;
