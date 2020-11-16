var db = require('./db')

function newUser(name, email, password) {
  let sqlCommand = `INSERT INTO user 
                      (name, email, password, image) 
                      VALUES
                      ('${name}', '${email}', '${password}', 'none.png');`
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