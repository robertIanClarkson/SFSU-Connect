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
      console.log(`(x) Failed to insert into db --> ${err}`)
      reject(err)
    })
  })
}

module.exports = {
  insert,
  getAll
}