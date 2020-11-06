var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
  res.render('account', { title: 'Account' });
});

router.get('/items', function(req, res, next) {
  res.render('inbox', { title: 'inbox' });
});

router.get('/inbox', function(req, res, next) {
  res.render('inbox', { title: 'inbox' });
});

/* POST */
// PRIORITY 2
router.post('/edit', function(req, res, next) {
  console.log(`POST: 'account/edit' --> ${req.body}`)
  res.sendStatus(200)
});

// PRIORITY 2
router.post('/items/delete/:id', function(req, res, next) {
  console.log(`POST: 'account/items/delete/${req.params.id}' --> ${req.body}`)
  res.sendStatus(200)
});

// PRIORITY 2
router.post('/inbox/delete/:id', function(req, res, next) {
  console.log(`POST: 'account/inbox/delete/${req.params.id}' --> ${req.body}`)
  res.sendStatus(200)
});

module.exports = router;