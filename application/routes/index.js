var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('vp', { title: 'Home' });
});

router.post('/search', function(req, res, next) {
  let searchData = req.body
  console.log(searchData.category)
  console.log(searchData.text)
  res.sendStatus(200)
});

module.exports = router;
