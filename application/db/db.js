var mysql = require('mysql');

/* THIS CODE ALLOWS US TO PROMISIFY ALL DB ACTIONS */ 

// Learned how to promisify mySQL via:
// https://codeburst.io/node-js-mysql-and-promises-4c3be599909b
class Database {
  constructor(config) {
    this.connection = mysql.createConnection(config);
  }
  query(sql, args) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        if (err)
          return reject(err);
        resolve(rows);
      });
    });
  }
  close() {
    return new Promise((resolve, reject) => {
      this.connection.end(err => {
        if (err)
          return reject(err);
        resolve();
      });
    });
  }
}

var config = {
  host: 'team-1.c04boetuas7w.us-west-1.rds.amazonaws.com',
  user: 'admin',
  password: 'team1_db',
  database: 'sfsu_connect_v2'
}

var db = new Database(config)

module.exports = db;
