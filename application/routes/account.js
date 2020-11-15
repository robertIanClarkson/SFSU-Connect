var express = require('express');
const db = require('../db/db');
const account = require('../db/account');
const test = require("../db/helpers/test");
var router = express.Router();

/* GET */
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
        // console.log(items);
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
router.get('/inbox', function(req, res, next) {
  if (req.isAuthenticated()) {
    res.render('inbox', { 
      title: 'Inbox',
      user: req.user
    })
  } else {
    res.redirect('login')
  }
});
/**
 * REMINDER: 
 * HAVE TO CHANGE THE a TAG IN ACCOUNT.PUG BACK TO INBOX.PUG
 */

router.get('/inboxv2', function(req,res,next) {
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

/* POST */
// PRIORITY 2
router.post('/edit', function(req, res, next) {
  console.log(`POST: 'account/edit' --> ${JSON.stringify(req.body)}`)
  res.sendStatus(200)
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