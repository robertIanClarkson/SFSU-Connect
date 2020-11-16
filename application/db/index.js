let db = require('./db');

function getNItems(n) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT item.id, item.name AS itemName, item.price, item.image, user.name AS userName
              FROM item
              JOIN user ON item.user_id = user.id
              WHERE item.available = 1
              ORDER BY item.created DESC
              LIMIT ?`, [n])
      .then((rows) => {
        if(rows.length === 0) {
          reject(`(x) ERROR --> Database did not return any items`)
        }
        else {
          resolve(rows)
        }
      })
      .catch((err) => {
        reject(`(${err}) ERROR --> DB call failed`)
      })
  });
}

function numItems_N_days() {
    return new Promise((resolve, reject) => {
        db.query(`SELECT COUNT(*) AS number FROM item WHERE created > (NOW() - INTERVAL 7 DAY) AND item.available = 1 AND item.approved = 1`)
            .then(Result => {
                resolve(Result)
        }).catch((err) => {
            reject(`(${err}) ERROR --> DB call failed`)
        })
    })
}

module.exports = {
    numItems_N_days
}