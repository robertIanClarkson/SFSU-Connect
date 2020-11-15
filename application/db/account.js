var db = require('./db')

function getMessages(userid){
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM message 
              WHERE user_id_reciever = ${userid}`)
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

function getMessages(userid){
  return new Promise((resolve, reject) => {
    db.query(`SELECT name AS sender , subject, message, message.created As date FROM message join user on message.user_id_sender = ${userid}`)
      .then((rows) => {
        if(rows.length == 0) {
          reject(`(x) ERROR --> Database did not return any items`)
        }
        else {
          resolve(rows)
        }
      })
  })
}

module.exports = {
  getMessages
}