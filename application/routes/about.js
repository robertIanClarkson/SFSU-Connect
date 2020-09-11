var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'About Us' });
});

router.get('/:name', function(req, res, next) {
  res.render(`about/${req.params.name}`, { title: req.params.name });
})

module.exports = router;