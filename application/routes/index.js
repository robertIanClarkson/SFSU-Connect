var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});

/* http://localhost:3000/test */

router.get('/inbox', function(req, res, next) {
  res.render('inbox', { title: 'Test' });
});

router.get('/aboutv2', function(req, res, next) {
    res.render('aboutv2', { title: 'Test' });
});

router.get('/test', function(req, res, next) {
    res.render('test', { title: 'Test' });
});

router.get('/landing', function(req, res, next) {
    res.render('landing', { title: 'Landing' });
});

module.exports = router;
