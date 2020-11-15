var db = require('./db')

function getMessages(userid){
  return new Promise((resolve, reject) => {
    db.query(`SELECT name As sender , subject, message,
              message.created As date FROM message join user on message.user_id_sender = user.id
              WHERE user_id_reciever = ?`, userid)
      .then((rows) => {
        resolve(rows)
      })
      .catch((err) => {
        reject(`(${err}) ERROR --> DB call failed`)
      })
  });
}

module.exports = {
  getMessages
}