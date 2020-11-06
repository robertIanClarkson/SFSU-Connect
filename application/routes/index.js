var express = require('express');
var router = express.Router();
var test = require("./../db/helpers/test");

/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Home' });
// });

router.get('/', function(req, res, next) {
    res.render('landing', { title: 'Landing' });
});

router.get('/footer', function(req, res, next) {
  res.render('footer', { title: 'footer' });
});

router.get('/thankyouforposting', function(req, res, next) {
  res.render('thankyouforposting', { title: 'thankyouforposting' });
});

router.get('/navbar', function(req, res, next) {
  res.render('navbar', { title: 'navbar' });
});

router.get('/account', function(req, res, next) {
  res.render('account', { title: 'Account' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

router.get('/viewItem', function(req, res, next) {
  res.render('viewItem', { title: 'viewItem' });  
});

router.post('/search', function(req, res, next) {
  let searchData = req.body
  test.getSearchResults(searchData.category, searchData.text).then((rows) => {    
    res.send(rows)
  })
});

router.post('/search', function(req, res, next) {
  let searchData = req.body
  test.getSearchResults(searchData.category, searchData.text).then((rows) => {    
    res.send(rows)
  })
});

module.exports = router;
