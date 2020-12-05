var db = require('./db')
let multer = require('multer');
let crypto = require('crypto');
const register = require('./register')


function getMessages(userid){
  return new Promise((resolve, reject) => {
    db.query(`SELECT name As sender , subject, message,
              message.created As date FROM message join user on message.user_id_sender = user.id
              WHERE user_id_reciever = ?`, userid)
      .then((rows) => {
        resolve(rows)
      })
      .catch((err) => {
        reject(`(${err}) ERROR --> DB call failed`)
      })
  });
}

function updateImage(fileName, userID){
  return new Promise(((resolve, reject) => {
      let baseSQL = `UPDATE user SET image = ? WHERE id = ?`
      db.query(baseSQL, [fileName, userID])
          .then((myPromise) =>{
              resolve(myPromise)
          })
          .catch((err) =>{
              reject(err.errno)
          })
  }))
}

let storage = multer.diskStorage({
  destination: function(req, file, callback) {
      callback(null, "public/images/profile_pics");
  },
  filename: function(req, file, callback) {
      let fileExtension = file.mimetype.split("/")[1];
      let randomName = crypto.randomBytes(16).toString("hex");
      callback(null, `${randomName}.${fileExtension}`)
  }
});

function newProfileImage(req, res) {
  return new Promise(((resolve, reject) => {
      let uploader = multer({storage: storage}).single('uploadImage');
      uploader(req, res, ()=>{
          let fileName = req.file.filename;
          let userID = req.user.id;
          req.session.passport.user.image = fileName;
          
          updateImage(fileName, userID).then((myPromise) => { resolve(myPromise)})
      });
  }))
}
function updatePassword(userid, password){
    return new Promise((resolve, reject) => {
        register.encryptPassword(password)
            .then((hash) => {
                db.query(`UPDATE user set password = ?  where id = ?`, [hash,userid])
                    .then(() => {
                        resolve('OK')
                    })
                    .catch((err) => {
                        reject(`(${err}) ERROR --> DB call failed`)
                    })
            })
    });
}

module.exports = {
  getMessages,
  newProfileImage,
  updatePassword
}