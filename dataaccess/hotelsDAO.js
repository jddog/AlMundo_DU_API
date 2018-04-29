var hotelsMock = require('../data/data.json')
var serviceAccount = require("../fireBase/configuracion/almundohotelsdu-firebase-adminsdk-07qru-aca3917ae6.json");
var admin = require("firebase-admin");
var MockActivo = process.env.mockActivo_API_AlMundo || false;

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://almundohotelsdu.firebaseio.com"
});

var database = admin.database();

function consultarHoteles(req,res)
{
    if(MockActivo)
    {
        return res.status(200).send({
            hotelsMock
        });
    }
    else
    {
        var ref = database.ref("hotels");

        ref.once("value", function(snapshot) {
            var hotelsObject = snapshot.val();
            var hotels = Object.keys(hotelsObject).map(function(k) { return hotelsObject[k] });

            return res.status(200).send({
                hotels
            });

        }); 
    }
}

function consultarHotelesPorId(req,res)
{
    var idHotel = req.params.id;
    var ref = database.ref("hotels/"+idHotel);

    ref.once("value", function(snapshot) {
        var hotel = snapshot.val();

        return res.status(200).send({
            hotel
        });

    }); 
}

function modificarHotel(req,res)
{
    var idHotel = req.params.id;
    var parametros = req.body;

    var ref = database.ref("hotels/"+idHotel);

    ref.update(parametros);

    return res.status(200).send("Se actualizo el hotel con id "+idHotel+" correctamente");
}

function eliminarHotel(req,res)
{
    var idHotel = req.params.id;

    var ref = database.ref("hotels/"+idHotel);

    ref.remove();

    return res.status(200).send("Se elimino el hotel con id "+idHotel +" correctamente");
}

function crearHotel(req,res)
{
    var parametros = req.body;

    if(parametros.id != undefined)
    {
        var ref = database.ref("hotels/"+parametros.id);

        ref.update(parametros);

        return res.status(200).send("Se creo el hotel con id "+parametros.id+" correctamente");
    }
    else
    {
        return res.status(500).send("Ha ocurrido un error con los parametros");
    }
}


function consultarHotelesFiltro(req,res)
{
    var parametros = req.body;

    var ref = database.ref("hotels");

    ref.once("value", function(snapshot) {
        var hotelsObject = snapshot.val();
        var hotels = Object.keys(hotelsObject).map(function(k) { return hotelsObject[k] });

        var hotelsFilter = hotels.filter(f => ((parametros.nombreHotel != "" && f.name.toLowerCase().indexOf(parametros.nombreHotel.toLowerCase()) !== -1) || parametros.nombreHotel == "")
        && (parametros.estrellas.find(fin => (fin != -1 && fin == f.stars) || (fin == -1))));

        return res.status(200).send({
            hotelsFilter
        });

    }); 
}

module.exports = {
    consultarHoteles,
    consultarHotelesPorId,
    modificarHotel,
    eliminarHotel,
    crearHotel,
    consultarHotelesFiltro
};