var db = require('./index')

function getUserWithID(id) {
  let sqlCommand = `SELECT * FROM user WHERE id='${id}'`
  return new Promise((resolve, reject) => {
    db.query(sqlCommand)
      .then((rows) => {
        console.log(rows[0])
      })
      .catch((err) => {
        console.log(err)
      })
  });
}

function getUserWithEmail(email) {
  let sqlCommand = `SELECT * FROM user WHERE email='${email}'`
  return new Promise((resolve, reject) => {
    db.query(sqlCommand)
      .then((rows) => {
        if(rows.length == 0) {
          reject(`(x) ERROR --> No user with: ${email}`)
        }
        if(rows.length == 1) {
          resolve(rows[0])
        }
        else {
          reject(`(x) ERROR --> More than one user with: ${email}`)
        }
      })
      .catch((err) => {
        reject(`(x) ERROR --> DB call failed: ${email}`)
      })
  })
}

module.exports = {
  getUserWithID,
  getUserWithEmail
}