/**
 * Express routers for the landing page
 */

var express = require('express');
var router = express.Router();
var db = require('./../db/index');
var test = require('../db/helpers/test');

// Renders landing page and gets latest items from the database to populate the
// page
router.get('/', function(req, res, next) {
  Promise.all([
    test.getSearchResults('All', ""),
    db.numItems_N_days()
  ]).then(([items, numItems]) => {
      if (req.isAuthenticated()) {
        res.render('landing', { 
          title: 'Home',
          numItems: numItems[0].number,
          items: items,
          category: 'All',
          user: req.user
        });
      } else {
        res.render('landing', { 
          title: 'Home',
          numItems: numItems[0].number,
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

// Handles search using a url query of the form
// /search?category=&text=
router.get('/search', function(req, res, next) {
  console.log(`POST: 'search' --> ${JSON.stringify(req.query)}`)
  searchData = req.query
  test.getSearchResults(searchData.category, searchData.text,searchData.filter)
  .then((items) => {
    if(req.isAuthenticated()) {
      res.render('searchResult', {
        title: 'Home',
        items: items,
        user: req.user,
        category: searchData.category,
        search: searchData.text
      });
    } else {
      res.render('searchResult', {
        title: 'Home',
        items: items,
        data:searchData.text,
        category: searchData.category,
        search: searchData.text
      });
    }

  })
});

router.get('/inboxv2', function(req, res, next) {
  res.render('inboxv2', { title: 'About Us' });
});

module.exports = router;
