var express = require('express');
var router = express.Router();

/* GET */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Home' });
// });

router.get('/', function(req, res, next) {
    console.log('hello')
    res.render('index', { title: 'Home' });
});

/* POST */
// PRIORITY 1
router.post('/search', function(req, res, next) {
  console.log(`POST: 'search' --> ${JSON.stringify(req.body)}`)
  let searchData = req.body
//   test.getSearchResults(searchData.category, searchData.text).then((rows) => {    
//     res.send(rows)
//   })
});

module.exports = router;
