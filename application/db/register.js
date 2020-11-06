var db = require('./index')

function newUser(first, last, email, password) {
  let sqlCommand = `INSERT INTO user 
                      (first_name, last_name, email, password) 
                      VALUES
                      ('${first}', '${last}', '${email}', '${password}');`
  return new Promise((resolve, reject) => {
    db.query(sqlCommand)
      .then(() => {
        resolve('ok')
      })
      .catch((err) => {
        reject(err.errno)
      })
  });
}

module.exports = {
  newUser
}