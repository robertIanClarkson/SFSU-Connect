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

/* http://localhost:3000/test */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

/* http://localhost:3000/test */
router.get('/postitem', function(req, res, next) {
  res.render('postitem', { title: 'PostingItem' });
});

/* http://localhost:3000/test */
router.get('/footer', function(req, res, next) {
  res.render('footer', { title: 'footer' });
});

/* http://localhost:3000/test */
router.get('/thankyouforposting', function(req, res, next) {
  res.render('thankyouforposting', { title: 'thankyouforposting' });
});

/* http://localhost:3000/navbar */
router.get('/navbar', function(req, res, next) {
  res.render('navbar', { title: 'navbar' });
});

/* http://localhost:3000/test */
router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Test' });
});

module.exports = router;
