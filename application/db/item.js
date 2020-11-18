var db = require('./db')

function getItemByID(id) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM item
              WHERE id = ?
              AND item.available = 1 AND item.approved = 1`, [id])
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

function newMessage(sender_id, item_id, message){
  return new Promise((resolve, reject) => {
      let getItem = `SELECT * FROM item WHERE id='${item_id}';`
      db.query(getItem)
          .then((items) => {
              console.log(items[0])
              let getReceiverUser = `SELECT * FROM user WHERE id='${items[0].user_id}';`
              db.query(getReceiverUser)
                  .then((receiver_users) => {
                      console.log(receiver_users[0])
                      let insertMessage = `INSERT INTO message  
                                    (item_id, user_id_sender, user_id_reciever, subject, message)
                                    VALUES
                                    ('${item_id}', '${sender_id}', '${receiver_users[0].id}', '${items[0].name}', '${message}');`
                      db.query(insertMessage)
                          .then((result) => {
                              console.log('OK')
                              console.log(result)
                              resolve('OK')
                          })
                  })
                  .catch((err) => {
                      reject(err.errno)
                  })
          });
  });
}

function newItem(name, description, price, category, fileName, userID){
  let baseSQL = `INSERT INTO item (name, description, price, category_name, image, user_id) 
                  VALUES ('${name}', '${description}', '${price}', '${category}', '${fileName}', '${userID}')`
  db.query(baseSQL)
    .then(() =>{
      resolve('ok')
    })
    .catch((err) =>{
      reject(err.errno)
    })
}

module.exports = {
  getItemByID,
  newMessage,
  newItem
}