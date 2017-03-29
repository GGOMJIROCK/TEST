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

  connection.query('SELECT * from test_table', function(err, rows) {
    if(err) throw err;
    console.log('THE SOLUTION IS : ', rows);
    res.send(rows);
  });
});

app.listion(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
