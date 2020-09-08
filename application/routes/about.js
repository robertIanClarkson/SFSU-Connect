var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/about/cody', function(req, res, next) {
  res.render('about/about_cody');
})

module.exports = router;