var db = require('./db')

function getMessages(userid){
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM message 
              WHERE id = ?`, [userid])
      .then((rows) => {
        if(rows.length == 0) {
          reject(`(x) ERROR --> Database did not return any items`)
        }
        else {
          resolve(rows[0])
        }
      })
      .catch((err) => {
        reject(`(${err}) ERROR --> DB call failed`)
      })
  });
}

module.exports = {
  getMessages
}