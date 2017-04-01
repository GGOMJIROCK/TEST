var db = require('../config/database');

exports.getTest = function(req, res) {

    var idx = req.params.idx;
    console.log('someone call getTest => idx :: ' + idx);
    //res.send([{idx:idx, contents:'pusan'}]);
    db.dbConnection.query('call sample2('+idx+')',
    [idx],
    function(err, rows) {

      res.json(rows);

    });
}

exports.postTest = function(req, res) {

  var jsonQuery;
   for(obj in req.body){
      jsonQuery = JSON.parse(obj);
      console.log('CALL API postTest / PARAMS => ' + obj);
   }
  var idx = jsonQuery.idx;//jsonQuery.idx;
  var label = jsonQuery.label;//jsonQuery.idx;
  db.dbConnection.query('call sample2('+idx+')',
  [idx],
  function(err, rows, fields) {
    res.json(rows);
  });
}

exports.putTest = function(req, res) {
  var idx = req.body.idx;
  db.dbConnection.query('call sample2('+idx+')',
  [idx],
  function(err, rows, fields) {
    res.json(rows);
  });
}
