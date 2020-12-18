var db = require('./db')
let multer = require('multer');
let crypto = require('crypto');
const register = require('./register')


// gets messages for inbox
function getMessages(userid){
  return new Promise((resolve, reject) => {
    let sqlCommand = `SELECT name AS sender , subject, message,
                      message.created AS date FROM message join user on message.user_id_sender = user.id
                      WHERE user_id_reciever = ?`
    db.query(sqlCommand, [userid])
      .then((rows) => {
        resolve(rows)
      })
      .catch((err) => {
        reject(`(${err}) ERROR --> DB call failed`)
      })
  });
}

// used to change your account profile pic
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

/* BLOCK BELOW IS ALL FOR ADDING A NEW PROFILE PIC TO THE DB */
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
        let Checksql = `SELECT * FROM user WHERE id = ?`
            db.query(Checksql, userid)
                .then((user) => {
                    if (user.length == 0){
                        reject("something went wrong")
                    }
                    register.encryptPassword(password)
                        .then((hash) => {
                            let sqlPass = `UPDATE user
                               set password = ?
                               where id = ?`
                            db.query(sqlPass, [hash, userid])
                                .then(() => {
                                    resolve('OK')
                                })
                                .catch((err) => {
                                    reject(`(${err}) ERROR --> DB call failed`)
                                })
                        })
                })
        });
}

module.exports = {
  getMessages,
  newProfileImage,
  updatePassword
}