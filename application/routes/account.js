var express = require('express');
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