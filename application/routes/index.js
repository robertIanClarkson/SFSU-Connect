var express = require('express');
var router = express.Router();
var db = require('./../db/index');
var test = require('../db/helpers/test');

/* GET */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Home' });
// });

router.get('/', function(req, res, next) {
  Promise.all([
    test.getSearchResults('All', ""),
    db.numItems_N_days(100)
  ]).then(([items, numItems]) => {
      if (req.isAuthenticated()) {
        res.render('landing', { 
          title: 'Home',
          numItems: numItems,
          items: items,
          category: 'All',
          user: req.user
        });
      } else {
        res.render('landing', { 
          title: 'Home',
          numItems: numItems,
          items: items,
          category: 'All'
        });
      }
    })
    .catch((err) => {
      console.log(err)
      res.render('landing', { 
        title: 'Home',
        category: 'All'
      });
    })
});

/* POST */
// PRIORITY 1
router.get('/search', function(req, res, next) {
  console.log(`POST: 'search' --> ${JSON.stringify(req.query)}`)
  searchData = req.query
  test.getSearchResults(searchData.category, searchData.text,searchData.filter)
  .then((items) => {
    // console.log(items);
    if(req.isAuthenticated()) {
      res.render('landing', {
        title: 'Home',
        items: items,
        user: req.user,
        category: searchData.category,
        search: searchData.text
      });
    } else {
      res.render('landing', {
        title: 'Home',
        items: items,
        data:searchData.text,
        category: searchData.category,
        search: searchData.text
      });
    }

  })
});

router.get('/inbox', function(req, res, next) {
  res.render('inbox', { title: 'About Us' });
});

module.exports = router;
