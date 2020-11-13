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

function getSearchResults(category, text) {
  return new Promise((resolve, reject) => {
    let sqlCommand = `SELECT item.id, item.name AS itemName, item.price, item.image, user.name AS userName
                      FROM item
                      JOIN user ON item.user_id = user.id`
    if(category=='All') {
      sqlCommand += ` WHERE TRUE`
    }
    else {
      sqlCommand += ` WHERE category_name = '${category}'`
    }
    let wordsArray = text.split(' ') // break search string into words
    for (word of wordsArray) {
      // append to SQL command
      sqlCommand += ` AND ( item.name LIKE '%${word}%' OR description LIKE '%${word}%' )`
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
  getItem
}