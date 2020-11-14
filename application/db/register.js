var db = require('./db')
const bcrypt = require('bcrypt');
const saltRounds = 10;

function encryptPassword(password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds)
      .then(function(hash) {
        resolve(hash)
      })
      .catch((error) => {
        reject(`Failed to encrypt password: ${error}`)
      })
  })
}

function newUser(name, email, password) {
  return new Promise((resolve, reject) => {
    console.log(password)
    encryptPassword(password)
      .then((hash) => {
        console.log(hash)
        let sqlCommand = `INSERT INTO user 
                      (name, email, password) 
                      VALUES
                      ('${name}', '${email}', '${hash}');`
        db.query(sqlCommand)
          .then(() => {
            resolve('ok')
          })
          .catch((err) => {
            // failed to query DB
            reject(err.errno)
          })
      })
      .catch((error) => {
        // failed to hash password
        reject(error)
      })
    
    
  });
}

module.exports = {
  newUser
}