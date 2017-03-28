var express = require("express");
var mysql = require('mysql');
var connection = mysql.createConnection({
  host : '34.208.192.248',
  user : 'ubuntu',
  port : '22',  
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
