var express = require("express");
var mysql = require('mysql');
var connection = mysql.createConnection({
  host : 'ec2-34-208-192-248.us-west-2.compute.amazonaws.com',
  user : 'ubuntu',
  port : '3306',
  password : '',
  database : 'testdb'
});
var app = express();
connection.connect(function(err) {
  if(!err) {
    console.log("Database is connected ... \n\n");
  } else {
    console.log("Error connecting database ... \n\n");
  }
});
app.get("/", function(request, response){

});

app.listen(3000);
