/**
 * Express routers for the about pages
 */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if (req.isAuthenticated()) {
    res.render('about', { 
      title: 'About Us',
      user: req.user
    });
  } else {
    res.render('about', { title: 'About Us' });
  }
});

// :name is dynamic and is used to load an individual developer's about page.
// i.e. /about/cody
router.get('/:name', function(req, res, next) {
  let name = req.params.name.charAt(0).toUpperCase() + req.params.name.slice(1); // capitalize name
  res.render(`about/${req.params.name}`, { title: `About Us | ${name}` });
})

module.exports = router;