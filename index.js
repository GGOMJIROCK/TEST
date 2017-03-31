var express = require('express');
var mysql   = require('mysql');
var dbconfig = require('./config/database.js');
var connection = mysql.createConnection(dbconfig);

var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
  res.send('Root');
});

app.get('/testdb', function(req, res) {

  connection.query('call sample()', function(err, rows) {
    if(err) throw err;
    console.log('THE SOLUTION IS : ', rows);
    res.send(rows);
  });
});

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '12345678',
//   port     : 3306,
//   database : 'testdb'
// });
//
// connection.connect();
//
// connection.query('SELECT * from test_table', function(err, rows, fields) {
//   if (!err)
//     console.log('The solution is: ', rows);
//   else
//     console.log('Error while performing Query.', err);
// });
//
// connection.end();
