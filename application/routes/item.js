var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
  res.render('item', { title: 'Item' });  
});

router.get('/new', function(req, res, next) {
  res.render('newItem', { title: 'New Item' });
});

// router.get('/thankyou', function(req, res, next) {
//   res.render('thankyou', { title: 'Thanks!' });
// });

/* POST */
// PRIORITY 1
router.post('/new', function(req, res, next) {
  console.log(`POST: 'item/new' --> ${req.body}`)
  res.render('thankyou', { title: 'Thanks!' });
});

module.exports = router;