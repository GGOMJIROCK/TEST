var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    next();
});

출처: http://m.mkexdev.net/339 [박종명의 아름다운 개발 since 2010.06]
app.get('/', function (req, res) {
  console.log('Some user connected.');
  res.sendFile(__dirname + '/app/index.html');
});

var server = app.listen(80, function () {
  console.log('Executed Server!!');
});

/* 라우터 등록 */
var api = require('./routes/api');
app.use('/api', api);
/*************/
