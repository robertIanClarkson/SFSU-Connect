var db = require('./db')

function getMessages(userid){
  return new Promise((resolve, reject) => {
    let sqlCommand = `SELECT name AS sender , subject, message,
                      message.created AS date FROM message join user on message.user_id_sender = user.id
                      WHERE user_id_reciever = ?`
    db.query(sqlCommand, [userid])
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