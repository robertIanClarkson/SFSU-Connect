var express = require('express');
var router = express.Router();
var db = require('./../db/index');
var test = require('../db/helpers/test');

/* GET */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Home' });
// });

router.get('/', function(req, res, next) {
  db.getNItems(8)
  .then((items) => {
    if (req.isAuthenticated()) {
      res.render('landing', { 
        title: 'Home',
        items: items,
        user: req.user
      });
    } else {
      res.render('landing', { 
        title: 'Home',
        items: items
      });
    }
  })
  .catch((err) => {
    console.log(err)
    res.render('landing', { 
      title: 'Home'
    });
  })
});

/* POST */
// PRIORITY 1
router.get('/search', function(req, res, next) {
  console.log(`POST: 'search' --> ${JSON.stringify(req.body)}`)
  console.log(req.query)
  let searchData = req.query
  test.getSearchResults(searchData.category, searchData.text)
  .then((items) => {
    console.log(items);
    res.render('landing', { 
      title: 'Home',
      items: items
    });
  })
});

module.exports = router;
