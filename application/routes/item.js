var express = require('express');
var router = express.Router();
var item = require('../db/item');
var db = require('../db/db')
var multer = require('multer');
var sharp = require('sharp');
var crypto = require('crypto');

/* GET */
// this will get replaced with below '/:id'
router.get('/', function(req, res, next) {
  if (req.isAuthenticated()) {
    res.render('item', { 
      title: 'Item' ,
      user: req.user
    }); 
  } else {
    res.render('item', { 
      title: 'Item' 
    }); 
  }
});

router.get('/new', function(req, res, next) {
  if (req.isAuthenticated()) {
    res.render('newItem', { 
      title: 'New Item',
      user: req.user
    });
  } else {
    res.redirect('/login');
  }
});

router.get('/thankyou', function(req, res, next) {
  if (req.isAuthenticated()) {
    res.render('thankyou', { 
      title: 'Thanks!',
      user: req.user
    });
  } else {
    res.render('thankyou', { title: 'Thanks!' })
  }
});

router.get('/:id', function(req, res, next) {
  console.log(`GET: 'item/${req.params.id}'`)
  item.getItemByID(req.params.id)
  .then((item) => {
    res.render('item', { 
      title: 'Item', 
      user: req.user,
      item: item
    })
  })
  .catch((err) => {
    console.log(err)
    res.render('landing', { title: 'Home' });
  });
});



/* POST */
// PRIORITY 1
// router.post('/new', function(req, res, next) {
//   console.log(`POST: 'item/new' --> ${JSON.stringify(req.body)}`)
//   res.render('thankyou', { title: 'Thanks!' });
// });

var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "public/images/items");
    },
    filename: function(req, file, callback) {
        let fileExtension = file.mimetype.split("/")[1];
        let randomName = crypto.randomBytes(16).toString("hex");
        callback(null, `${randomName}.${fileExtension}`)
    }
});

var uploader = multer({storage: storage});

router.post('/new', uploader.single('uploadImage'), (req, res, next) => {
    let filePath = req.file.path;
    let fileName = req.file.filename;
    console.log(filePath);
    let thumbnailName = `thumbnail-${fileName}`;
    let thumbnailPath = req.file.destination + "/" + thumbnailName;
    let userID = req.user.id;
    let name = req.body.itemname;
    let description = req.body.description;
    let price = req.body.price;
    let category = req.body.category;

    sharp(filePath).resize(200).toFile(thumbnailPath);

    console.log(name + ' $ ' + description + ' $ ' + price + ' $ ' + category + ' $ ' + fileName + ' $ ' + userID);
    
    let baseSQL = `INSERT INTO item (name, description, price, category_name, image, user_id)
                    VALUES (?, ?, ?, ?, ?, ?)`
    db.query(baseSQL, [name, description, price, category, fileName, userID])
    .then(() => {
      res.render('thankyou', { title: 'Thanks!' });
    })
    .catch((err) => {
      console.log(err);
    });
    
})

module.exports = router;