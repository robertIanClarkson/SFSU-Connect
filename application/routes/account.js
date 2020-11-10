var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
  if (req.isAuthenticated()) {
    res.render('account', { title: 'Account' })
  } else {
    res.redirect('login')
  }
});

router.get('/items', function(req, res, next) {
  if (req.isAuthenticated()) {
    res.render('userItems', { title: 'Inbox' })
  } else {
    res.redirect('login')
  }
});

router.get('/inbox', function(req, res, next) {
  if (req.isAuthenticated()) {
    res.render('inbox', { title: 'Inbox' })
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