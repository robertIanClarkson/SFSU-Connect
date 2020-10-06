var express = require('express');
var router = express.Router();
var test = require("./../db/helpers/test")

/* GET test page. */
router.get('/', function(req, res, next) {
  res.render('test', { title: 'Test' });
});

router.post('/put', function(req, res, next) {
  console.log("DATABASE PUT")
  test.insert(req.body.name, req.body.message)
    .then(() => {
      res.render('test', { title: 'Test' });
    })
});

router.post('/get', function(req, res, next) {
  console.log("DATABASE GET")
  test.getAll()
    .then((rows) => {
      res.render('test', { 
        title: 'Test', 
        records: rows 
      });
    })
  
});

module.exports = router;
