var express = require('express');
var hotelsDAO = require('./dataaccess/hotelsDAO');

var mirout = require('./routs/pruebaRout');

var app = express();
var port = process.env.port || 9000;

app.listen(port, (error) => {
    console.log("Servidor corriendo :",port);
});

app.use('/testRout', mirout);

