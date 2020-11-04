var express = require('express');
var router = express.Router();
var test = require("./../db/helpers/test")

/* GET test page. */
router.get('/', function(req, res, next) {
  test.getAll()
    .then((rows) => {
      res.render('test', { 
        title: 'Test',
        records: rows
      });
    })
});

router.post('/put', function(req, res, next) {
  test.insert(req.body.name, req.body.message)
    .then(() => {
      test.getAll()
        .then((rows) => {
          res.render('test', { 
            title: 'Test',
            records: rows
          });
        })
    })
});




module.exports = router;
