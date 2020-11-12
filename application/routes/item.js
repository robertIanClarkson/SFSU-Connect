var express = require('express');
var router = express.Router();

/* GET */
// this will get replaced with below '/:id'
router.get('/', function(req, res, next) {
  if (req.isAuthenticated()) {
    res.render('item', { 
      title: 'Item' ,
      user: req.user
    }); 
  } else {
    res.render('item', { 
      title: 'Item' 
    }); 
  }
});

router.get('/new', function(req, res, next) {
  if (req.isAuthenticated()) {
    res.render('newItem', { 
      title: 'New Item',
      user: req.user
    });
  } else {
    res.redirect('/login');
  }
});

router.get('/thankyou', function(req, res, next) {
  if (req.isAuthenticated()) {
    res.render('thankyou', { 
      title: 'Thanks!',
      user: req.user
    });
  } else {
    res.render('thankyou', { title: 'Thanks!' })
  }
});

router.get('/:id', function(req, res, next) {
  console.log(`GET: 'item/${req.params.id}'`)
  if (req.isAuthenticated()) {
    res.render('item', { 
      title: 'Item', 
      user: req.user
    })
  } else {
    res.render('item', { title: 'Item' })  
  }
});



/* POST */
// PRIORITY 1
router.post('/new', function(req, res, next) {
  console.log(`POST: 'item/new' --> ${JSON.stringify(req.body)}`)
  res.render('thankyou', { title: 'Thanks!' });
});

module.exports = router;