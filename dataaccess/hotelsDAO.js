var hotels = require('../data/data.json')

function obtenerJson(req,res){
    var params = req.body;
    
    return res.status(200).send({
        hotels
    });
}


function test(req,res){
    var params = req.body;
    
    return res.status(200).send({
        putos:"putos"
    });
}

module.exports = {
    obtenerJson,
    test
};