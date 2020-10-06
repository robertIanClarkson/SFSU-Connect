var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host: 'team-1.c04boetuas7w.us-west-1.rds.amazonaws.com',
//   user: 'admin',
//   password: 'team1_db',
//   database : 'test'
// });

// connection.connect(function(err) {
//   if (err) {
//     console.log("(x) ERROR: Failed to connect to DB");
//     throw err;
//   } else {
//     console.log("(+) Connected to DB");
//   }
// })

// module.exports = connection;

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
  database: 'test'
}

var db = new Database(config)

module.exports = db;
