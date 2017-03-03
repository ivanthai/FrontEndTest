var express = require('express');
var router = express.Router();
var controller = require('./commits.controller.js');

router.get('/', controller.show);

module.exports = router;
