var express = require('express');
var router = express.Router();
var test = require("./../db/helpers/test");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});

// Change Home to landing after
router.get('/landing', function(req, res, next) {
    res.render('landing', { title: 'Landing' });
});

router.get('/inbox', function(req, res, next) {
  res.render('inbox', { title: 'inbox' });
});

router.get('/aboutv2', function(req, res, next) {
    res.render('aboutv2', { title: 'aboutv2' });
});

router.get('/test', function(req, res, next) {
    res.render('test', { title: 'Test' });
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
router.get('/account', function(req, res, next) {
  res.render('account', { title: 'Account' });
});

/* http://localhost:3000/test */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

/* http://localhost:3000/test */
router.get('/viewItem', function(req, res, next) {
  res.render('viewItem', { title: 'viewItem' });  
});

router.post('/search', function(req, res, next) {
  let searchData = req.body
  test.getSearchResults(searchData.category, searchData.text).then((rows) => {    
    res.send(rows)
  })
});

module.exports = router;
