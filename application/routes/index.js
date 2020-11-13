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
  let searchData = req.query
  db.getNItemsSearch(8,searchData.category,searchData.text)
      .then((items) => {
        console.log(items)
        if (req.isAuthenticated()) {
          res.render('landing', {
            title: 'Home',
            items: items,
            user: req.user,
            data: searchData.text
          });
        } else {
          res.render('landing', {
            title: 'Home',
            items: items,
            data: searchData.text
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
router.get('/searchF', function(req, res, next) {
  console.log(`POST: 'search' --> ${JSON.stringify(req.query)}`)
  let FilterData = req.query
  db.getFItemsSearch(FilterData.type,FilterData.category,FilterData.text)
      .then((items) => {
        console.log(items)
        if (req.isAuthenticated()) {
          res.render('landing', {
            title: 'Home',
            items: items,
            user: req.user,
            data:FilterData.text
          });
        } else {
          res.render('landing', {
            title: 'Home',
            items: items,
            data:FilterData.text
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

module.exports = router;
