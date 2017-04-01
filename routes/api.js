var express = require('express');
var router = express.Router();

var testApi = require('../api/test');
router.get('/test/:idx', testApi.getTest);
router.post('/test', testApi.postTest);
router.put('/test', testApi.putTest);

module.exports = router;
