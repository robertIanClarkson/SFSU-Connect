var db = require('./../db')

function insert(name, message) {
  return new Promise((resolve, reject) => {
    db.query(`INSERT INTO test_table (name, message) VALUES ('${name}', '${message}')`)
    .then((rows) => {
      console.log(`(+) inserted into db --> ${name} : ${message}`)
      resolve(rows)
    })
    .catch((err) => {
      console.log(`(x) Failed to insert into db --> ${err}`)
      reject(err)
    })
  })
}

function getAll() {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM test_table`)
    .then((rows) => {
      // console.log(`(+) pulled from db --> ${JSON.stringify(rows)}`)
      console.log(`(+) pulled from db --> ${rows.length} records`)
      resolve(rows)
    })
    .catch((err) => {
      console.log(`(x) Failed to pull from db --> ${err}`)
      reject(err)
    })
  })
}

function getSearchResults(category, text, filter='date:new->old') {
  return new Promise((resolve, reject) => {
    let sqlCommand = `SELECT item.id, item.name AS itemName, item.price, item.image, item.created, user.name AS userName
                      FROM item
                      JOIN user ON item.user_id = user.id`
    if(category=='All') {
      sqlCommand += ` WHERE TRUE`
    }
    else {
      sqlCommand += ` WHERE category_name = '${category}'`
    }
    sqlCommand += ` AND approved  = 1 AND available = 1`
    let wordsArray = text.split(' ') // break search string into words
    for (word of wordsArray) {
      // append to SQL command
      sqlCommand += ` AND ( item.name LIKE '%${word}%' OR description LIKE '%${word}%' )`
    }
    switch (filter) {
      case 'price:high->low':
        sqlCommand += ` ORDER BY item.price DESC`
        break;
      case 'price:low->high':
        sqlCommand += ` ORDER BY item.price ASC`
        break;
      case 'date:old->new':
        sqlCommand += ` ORDER BY item.created ASC`
        break;
      case 'date:new->old':
        sqlCommand += ` ORDER BY item.created DESC`
        break;
      default:
        console.log("got a value other than 1-4 for filter setting")
    }
    db.query(sqlCommand)
    .then((rows) => {
      // console.log(`(+) pulled from db --> ${JSON.stringify(rows)}`)
      console.log(`(+) pulled from db --> ${rows.length} records`)
      resolve(rows)
    })
    .catch((err) => {
      console.log(`(x) Failed to pull from db --> ${err}`)
      reject(err)
    })
  })
}

function getUserItems(user) {
  console.log(user.id)
  return new Promise((resolve, reject) => {
    let sqlCommand = `SELECT item.id, item.name AS itemName, item.price, item.image, user.name AS userName
                      FROM item
                      JOIN user ON item.user_id = user.id`

    sqlCommand += ` WHERE user.id = '${user.id}'`
    db.query(sqlCommand)
        .then((rows) => {
          // console.log(`(+) pulled from db --> ${JSON.stringify(rows)}`)
          console.log(`(+) pulled from db --> ${rows.length} records`)
          resolve(rows)
        })
        .catch((err) => {
          console.log(`(x) Failed to pull from db --> ${err}`)
          reject(err)
        })
  })
}

/**
 *  Function getItem():
 *    This function will get the item base on the item name 
 *    and give back the info to post on viiewItem page
 * 
 */
function getItem(item) {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM test_table`)
    .then((rows) => {
      // console.log(`(+) pulled from db --> ${JSON.stringify(rows)}`)
      console.log(`(+) pulled from db --> ${rows.length} records`)
      resolve(rows)
    })
    .catch((err) => {
      console.log(`(x) Failed to pull from db --> ${err}`)
      reject(err)
    })
  })
}

module.exports = {
  insert,
  getAll,
  getSearchResults,
  getItem,
  getUserItems
}