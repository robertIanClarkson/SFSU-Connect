var db = require('./index')

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
  checkEmail,
  checkPassword
}