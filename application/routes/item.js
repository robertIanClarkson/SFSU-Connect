var express = require('express');
var router = express.Router();

/* GET */
// this will get replaced with below '/:id'
router.get('/', function(req, res, next) {
  res.render('item', { title: 'Item' });  
});

router.get('/new', function(req, res, next) {
  console.log('jhe')
  if (req.isAuthenticated()) {
    res.render('newItem', { title: 'New Item' });
  } else {
    res.redirect('/login');
  }
});

router.get('/:id', function(req, res, next) {
  console.log(`GET: 'item/${req.params.id}'`)
  res.render('item', { title: 'Item' });  
});



// router.get('/thankyou', function(req, res, next) {
//   res.render('thankyou', { title: 'Thanks!' });
// });

/* POST */
// PRIORITY 1
router.post('/new', function(req, res, next) {
  console.log(`POST: 'item/new' --> ${JSON.stringify(req.body)}`)
  res.render('thankyou', { title: 'Thanks!' });
});

module.exports = router;