/**
 * Database queries used by the login page
 */

var db = require('./db')

// Returns a user with the given id, used for authentication
function getUserWithID(id) {
  let sqlCommand = `SELECT * FROM user WHERE id=?`
  return new Promise((resolve, reject) => {
    db.query(sqlCommand, [id])
      .then((rows) => {
        if(rows.length == 0) {
          reject(`(x) ERROR --> No user with: id=${id}`)
        }
        if(rows.length == 1) {
          resolve(rows[0])
        }
        else {
          reject(`(x) ERROR --> More than one user with: id=${id}`)
        }
      })
      .catch((err) => {
        reject(`(x) ERROR --> DB call failed: id=${id}`)
      })
  });
}

// Returns a user with the given email, used for authentication
function getUserWithEmail(email) {
  let sqlCommand = `SELECT * FROM user WHERE email=?`
  return new Promise((resolve, reject) => {
    db.query(sqlCommand, [email])
      .then((rows) => {
        if(rows.length == 0) {
          reject(`(x) ERROR --> No user with: email=${email}`)
        }
        if(rows.length == 1) {
          resolve(rows[0])
        }
        else {
          reject(`(x) ERROR --> More than one user with: email=${email}`)
        }
      })
      .catch((err) => {
        reject(`(x) ERROR --> DB call failed: email=${email}`)
      })
  })
}

module.exports = {
  getUserWithID,
  getUserWithEmail
}