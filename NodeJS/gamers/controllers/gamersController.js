// requerimos el modelo en el contralador
const Gamer= require ('../models/gamer');
const sha1 = require('sha1');
const jwt = require('jsonwebtoken');
let jwtKey = "OADS1231ADFsfjSFDSDFSDFggI223?332sddd3S30994)4332AIJIASD";
//creamos un objeto vacio
const controller={};

//creamos un nuevo metodo con la busqueda de todos los usuarios
controller.getGamers = (req, res) => {
    Gamer.find({}, (err, results)=>{
        res.send("Búsqueda de todos los Gamers");
        console.log(results)
    })
};

///busqueda de Gamer por ID

controller.getGamerById = (req,res)=>{
    let idGamer = req.params.idGamer;
    Gamer.findById(idGamer, (err,result) =>{
        res.send("Búsqueda de Gamer por ID");
        console.log( result);
    });

};

//gamerToken
controller.tokenGamer = (req,res)=>{
    let nickname = req.body.nickname;
    let password = sha1(req.body.password);

    Gamer.findOne({nickname}, (err,result) =>{
        console.log( result);
        if (err) {
            throw err;
        } else if (result.nickname === nickname && result.password === password){
            var token = jwt.sign({ nickname, password }, jwtKey);
            res.json(token);
            console.log(token)
        }else{
            res.send("No existe el usuario");
        }


    });

};

//Guardar Usuario
controller.saveGamer = (req,res)=>{
    let gamer = new Gamer();

    gamer.name = req.body.name;
    gamer.lastname = req.body.lastname;
    gamer.nickname = req.body.nickname;
    gamer.game = req.body.game;
    gamer.password = sha1(req.body.password);

    gamer.save((err,result)=>{
        res.send("Gamer guardado");
        console.log(result);
    });

};

//eliminar usuario

controller.deleteGamer = (req,res)=>{
    let idGamer= req.params.idGamer;
    console.log(idGamer);
    Gamer.findById(idGamer, (err,result)=>{
        console.log(result);
        result.remove( err => {
            res.send('Gamer eliminado');
        });
    })
};

controller.updateGamer = (req,res)=>{
    let idGamer= req.params.idGamer;
    let update = req.body;
    Gamer.findByIdAndUpdate(idGamer, update, (err,result) =>{
        res.send("Actualizado");
        console.log(result);
    })
};
/*//controlador para crear el token
controller.tokenGamer = (req, res)=>{
    //primero necesitamos los campos que voy a comprobar en la bbdd
    let nickname = req.body.nickname;

    //vamos a utilizar el findOne que busca por campo
    Gamer.findOne({nick}, (err, result) => {
        console.log(result);
        //3 condiciones
        // primera si da error muéstralo
        if (err){
            throw  err;
            // si los dos campos son iguales
        }else if(result.nickname === req.body.nickname){
            //creamos el token pasamos los campos que queramos al token con segundo parámetro pasamos la key
            var token = jwt.sign({nickname, password}, key);
            //por ultimo enviamos el token en formato json para recogerlo en el front y hacer algo
            res.json(token);
            console.log(token);
            //sino se cumplen las condiciones indicamos mensaje
        } else{
            res.send("No existe el usuario");
        }
    })

};*/

//exportamos ese objeto cont todos sus metods
module.exports = controller;
