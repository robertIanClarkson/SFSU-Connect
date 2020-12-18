/**
 * Database queries used by the registration page
 */

var db = require('./db');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// encrypts the password to store in DB
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

// Adds a new user to the DB, used on registration
function newUser(name, email, password) {
  return new Promise((resolve, reject) => {
    console.log(password)
    encryptPassword(password)
      .then((hash) => {
        let sqlCommand = `INSERT INTO user 
                      (name, email, password, image) 
                      VALUES
                      (?, ?, ?, 'none.png');`
        db.query(sqlCommand, [name, email, hash])
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
  newUser,
  encryptPassword
}