var mysql = require('mysql');
var dbAccount = {
  host : 'localhost',
  user : 'root',
  password : '12345678',
  port     : '3306',
  database : "testdb"
};

exports.dbConnection = mysql.createConnection(dbAccount);
