/**
 * Express routers for the item pages
 */

var express = require('express');
var router = express.Router();
var item = require('../db/item');
var db = require('../db/db')
var multer = require('multer');


// This will get replaced with below '/:id'
router.get('/', function(req, res, next) {
  if (req.isAuthenticated()) {
    res.render('item', { 
      title: item.name ,
      user: req.user
    }); 
  } else {
    res.render('item', { 
      title: item.name 
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

// URL where forms for new item are posted
router.post('/new', (req, res, next) => {
    item.newItem(req, res)
    .then(() => {
      res.redirect('/item/thankyou');
    })
    .catch((err) => {
      console.log(err);
      res.render('error', {
        title: "Error",
        message: "Failed to POST a new item",
        error: {
          status: err,
          stack: ""
        }
      })
    })
})

// URL where forms for new user messages are posted
router.post('/message', function(req, res, next){
  console.log(`POST: 'item/message' --> ${JSON.stringify(req.body)}`)
  if(req.isAuthenticated()) {
    item.newMessage(req.user.id, req.body.item_id, req.body.message)
    .then((result) =>{
      console.log(`result --> ${result}`)
      res.redirect('/');
    })
    .catch((errno) =>{
      console.log(`Send Message Error: ${errno}`)
      res.redirect('/');
    })
  } else {
    // not authenticated
    res.render('login', {
      title: "Login",
      error: "Please Login to send a message"
    })
  }
  
});

// :id is dynamic and renders the appropriate item page when provided the item
// id
router.get('/:id', function(req, res, next) {
  console.log(`GET: 'item/${req.params.id}'`)
  item.getItemByID(req.params.id)
  .then((item) => {
    if((item.available && item.approved) || item.user_id === req.user.id) {
      res.render('item', { 
        title: item.name, 
        user: req.user,
        item: item
      })
    }
    else {
      throw 'Invalid Item'
    }
  })
  .catch((err) => {
    console.log(err)
    res.render('landing', { title: 'Home' });
  });
});

module.exports = router;