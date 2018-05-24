let mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  database: 'zombies',
  user: 'felipe',
  password: 'admin',
  port: 3306,
  multipleStatements: true
});

connection.connect();

module.exports = connection;
