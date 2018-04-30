var express = require('express');
var hotelRout = require('./routs/hotelsRout');
var bodyParser = require('body-parser');


var app = express();
const PORT = process.env.PORT;

app.listen(PORT, (error) => {
    console.log("Servidor corriendo :",PORT);
});

app.use(bodyParser.json());
app.use('/AlMundoHotelsAPI', hotelRout);





