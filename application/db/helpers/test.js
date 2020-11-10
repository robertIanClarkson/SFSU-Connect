var db = require('./../index')

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
    let sqlCommand
    if(category=='All') {
      sqlCommand = `SELECT * FROM Items WHERE TRUE`
    }
    else {
      sqlCommand = `SELECT * FROM Items WHERE CategoriesName = '${category}'`
    }
    let wordsArray = text.split(' ') // break search string into words
    for (word of wordsArray) {
      // append to SQL command
      sqlCommand += ` AND ( name LIKE '%${word}%' OR description LIKE '%${word}%' )`
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
 * getLatest() function:
 * 
 *  This function is use to grab the 8 latest row from the item db
 *  and return it to display in the landing page 
 * 
 */
function getLatest() {
  return new Promise((resolve, reject) => {
    db.query(`SELECT TOP 8 * FROM test_table`)
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
  getLatest
}