var express = require('express');
var hotelsDAO = require('../dataaccess/hotelsDAO');

var router = express();
router.use(function (req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

    res.header('Access-Control-Allow-Headers', 'content-type');

    next();
});


router.get('/hotels',hotelsDAO.consultarHoteles);
router.get('/hotels/:id',hotelsDAO.consultarHotelesPorId);
router.post('/hotels',hotelsDAO.crearHotel);
router.put('/hotels/:id',hotelsDAO.modificarHotel);
router.delete('/hotels/:id',hotelsDAO.eliminarHotel);
router.post('/hotelsFilter',hotelsDAO.consultarHotelesFiltro);

module.exports = router;