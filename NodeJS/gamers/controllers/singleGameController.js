// requerimos el modelo en el contralador
const SingleGame= require ('../models/singleGame');

//creamos un objeto vacio
const controller={};

//creamos un nuevo metodo con la busqueda de todos los Games
controller.getSingleGames = (req, res) => {
    SingleGame.find({}, (err, results)=>{
        res.send("Búsqueda de todos los Juegos");
        console.log(results)
    })
};

///búsqueda de SingleGame por ID

controller.getSingleGameById = (req,res)=>{
    let idSingleGame = req.params.idSingleGame;
    SingleGame.findById(idSingleGame, (err,result) =>{
        res.send("Búsqueda de SingleGame por ID");
        console.log( result);
    });

};

//Guardar SingleGame
controller.saveSingleGame = (req,res)=>{
    let singleGame = new SingleGame();

    singleGame.nameGame = req.body.nameGame;
    singleGame.descriptionGame = req.body.descriptionGame;
    singleGame.modality = req.body.modality;


    singleGame.save((err,result)=>{
        res.send("SingleGame guardado");
        console.log(result);
    });

};

//eliminar usuario

controller.deleteSingleGame = (req,res)=>{
    let idSingleGame= req.params.idSingleGame;
    console.log(idSingleGame);
    SingleGame.findById(idSingleGame, (err,result)=>{
        console.log(result);
        result.remove( err => {
            res.send('SingleGame eliminado');
        });
    })
};

controller.updateSingleGame = (req,res)=>{
    let idSingleGame= req.params.idSingleGame;
    let update = req.body;
    SingleGame.findByIdAndUpdate(idSingleGame, update, (err,result) =>{
        res.send("Actualizado");
        console.log(result);
    })
};
//exportamos ese objeto cont todos sus metods
module.exports = controller;
