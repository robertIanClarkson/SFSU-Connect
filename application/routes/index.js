var express = require('express');
var router = express.Router();
var test = require("./../db/helpers/test");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('vp', { title: 'VP' });
});

router.post('/search', function(req, res, next) {
  let searchData = req.body
  test.getSearchResults(searchData.category, searchData.text).then((rows) => {
    console.log(rows)
    res.send(rows)

    // res.render('vp', {
    //   title: 'VP',
    //   items: rows
    // })
  })
});

module.exports = router;
