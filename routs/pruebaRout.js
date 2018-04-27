var express = require('express');
var hotelsDAO = require('../dataaccess/hotelsDAO');

var router = express();

router.get('/test',hotelsDAO.obtenerJson);

router.get('/hola',hotelsDAO.test);

module.exports = router;