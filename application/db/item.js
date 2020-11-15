var db = require('./db')

function getItemByID(id) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM item
              WHERE id = ?`, [id])
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

function newMessage(itemid, userid, message){
  let sqlCommand = `INSERT INTO message 
                      (itemid, userid, message) 
                      VALUES
                      ('${itemid}', '${userid}', '${message}';`
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
  getItemByID,
  newMessage
}