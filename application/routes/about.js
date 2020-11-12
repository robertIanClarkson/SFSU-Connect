var express = require('express');
var router = express.Router();

/* GET */
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

router.get('/:name', function(req, res, next) {
  let name = req.params.name.charAt(0).toUpperCase() + req.params.name.slice(1); // capitalize name
  res.render(`about/${req.params.name}`, { title: `About Us | ${name}` });
})

/* POST - NONE RIGHT NOW */


module.exports = router;