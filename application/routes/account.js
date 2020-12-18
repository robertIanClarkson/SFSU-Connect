/**
 * Express routers for the account pages
 */

var express = require('express');
const db = require('../db/db');
const account = require('../db/account');
const test = require("../db/helpers/test");
var router = express.Router();

router.get('/', function(req, res, next) {
  if (req.isAuthenticated()) {
    res.render('account', { 
      title: 'Account',
      user: req.user
    })
  } else {
    res.redirect('login')
  }
});

router.get('/items', function(req, res, next) {
  console.log(`POST: 'search' --> ${JSON.stringify(req.body)}`)

  searchData = req.query

  test.getUserItems(req.user)
      .then((items) => {
        if (req.isAuthenticated()) {
          res.render('userItems', {
            title: 'Home',
            items: items,
            user: req.user,
            data: searchData.text
          });
        } else {
          res.redirect('login')
        }
      })
});

router.get('/inbox', function(req,res,next) {
  if (req.isAuthenticated()) {
    account.getMessages(req.user.id)
      .then((messages) =>{
        if(messages.length != 0) {
          res.render('inboxv2', {
            title: 'Inbox',
            user: req.user,
            messages: messages
          })
        } else {
          res.render('inboxv2', {
            title: 'Inbox',
            user: req.user
          })
        }
        
      })
  } else {
    res.redirect('login')
  }
});

// Page where new profile pictures are posted
router.post('/newImage', function(req, res, next) {
  account.newProfileImage(req, res)
  .then(() => {
    res.redirect('/account')
  })
  .catch((err) => {
    console.log(err);
  });
})

// URL where forms for new user passwords are posted
router.post('/edit', function(req, res, next) {
  console.log(`POST: 'account/edit' --> ${JSON.stringify(req.body)}`)
  account.updatePassword(req.user.id, req.body.password)
      .then(() => {
        res.redirect('/account')
      })
      .catch((err) => {
        console.log(err)
      })
});

// PRIORITY 2
router.post('/items/delete/:id', function(req, res, next) {
  console.log(`POST: 'account/items/delete/${req.params.id}' --> ${JSON.stringify(req.body)}`)
  res.sendStatus(200)
  
});

// PRIORITY 2
router.post('/inbox/delete/:id', function(req, res, next) {
  console.log(`POST: 'account/inbox/delete/${req.params.id}' --> ${JSON.stringify(req.body)}`)
  res.sendStatus(200)
});

module.exports = router;