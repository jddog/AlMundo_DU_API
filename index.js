var express = require('express');
var hotelRout = require('./routs/hotelsRout');
var bodyParser = require('body-parser');


var app = express();
var port = process.env.port || 9000;

app.use(bodyParser.json());
app.use('/AlMundoHotelsAPI', hotelRout);

app.listen(port, (error) => {
    console.log("Servidor corriendo :",port);
});



