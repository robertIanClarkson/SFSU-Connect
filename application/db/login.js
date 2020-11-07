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
  let sqlCommand = `SELECT id, email, password FROM user WHERE email='${email}'`
  return new Promise((resolve, reject) => {
    db.query(sqlCommand)
      .then((rows) => {
        // console.log(rows[0])
        resolve(rows[0])
      })
      .catch((err) => {
        console.log(err)
      })
  })
}

function checkEmail(email) {
  let sqlCommand = `SELECT COUNT (id) AS numUsers
                    FROM user
                    WHERE email='${email}';`
  return new Promise((resolve, reject) => {
    db.query(sqlCommand)
      .then((rows) => {
        resolve(rows[0].numUsers > 0) // 1 or more user with that email
      })
      .catch((err) => {
        reject(err.errno)
      })
    });
}

function checkPassword(email, password) {
  let sqlCommand = `SELECT password FROM user WHERE email='${email}';`
  return new Promise((resolve, reject) => {
    db.query(sqlCommand)
      .then((rows) => {
        resolve(rows[0].password == password)
      })
      .catch((err) => {
        console.log(err)
        reject(err.errno)
      })
  })
}

module.exports = {
  getUserWithID,
  getUserWithEmail,
  checkEmail,
  checkPassword
}