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
router.post('/search', function(req, res, next) {
  console.log(`POST: 'search' --> ${JSON.stringify(req.body)}`)
  let searchData = req.body
  console.log(req.cookies)
  db.getNItemsSearch(8,searchData.category,searchData.text)
      .then((items) => {
        console.log(items)
        res.cookie('category',searchData.category)
        res.cookie('text',searchData.text)
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
router.post('/searchF', function(req, res, next) {
  console.log(`POST: 'search' --> ${JSON.stringify(req.body)}`)
  let FilterData = req.body
  console.log(req.cookies['category'])
  console.log(FilterData.type)
  db.getFItemsSearch(FilterData.type,req.cookies['category'],req.cookies['text'])
      .then((items) => {
        console.log(items)
        if (req.isAuthenticated()) {
          res.render('landing', {
            title: 'Home',
            items: items,
            user: req.user,
            data: req.cookies['text']
          });
        } else {
          res.render('landing', {
            title: 'Home',
            items: items,
            data: req.cookies['text']
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
