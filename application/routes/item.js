var express = require('express');
var router = express.Router();
var db = require('../db/item');

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
  db.getItemByID(req.params.id)
  .then((item) => {
    res.render('item', { 
      title: 'Item', 
      user: req.user,
      item: item
    })
  })
  .catch((err) => {
    console.log(err)
    res.render('landing', { title: 'Home' });
  });
});



/* POST */
// PRIORITY 1
router.post('/new', function(req, res, next) {
  console.log(`POST: 'item/new' --> ${JSON.stringify(req.body)}`)
  if(req.isAuthenticated()) {
    // MAKE DB CALL HERE
    res.render('thankyou', { 
      title: 'Thanks!',
      user: req.user
    });
  } else {
    // USER TRYING TO POST BUT NOT LOGGED IN (SHOULDNT BE POSSIBLE)
    res.render('error', {
      title: 'Error',
      message: 'Unauthorized',
      error: {
        status: 401,
        stack: 'Trying to post a new item when unauthorized'
      }
    })
  }
  
});

module.exports = router;