//CONTROLADOR INDEX ROUTER

//REQUERIMOS LAS LIBRERIAS
const connection = require('../config/db');

//CREO UNA VARIABLE QUE ES UN OBJETO LA CUAL EXPORTO PARA UTILIZARLA EN EL ARCHIVO DE LA RUTA
const controller = {};

//PASO 3 CREAMOS UN CONTROLADOR CON UN NOMBRE UNICO PARA EL MISMO METODO HTTP QUE UTILICE

controller.listFruits = (req, res) => {
    /*        res.send('Funciona el controlador ListFruits')*/

    let listsql = 'SELECT * FROM fruits';
    connection.query(listsql, (error, resultsFruits) => {
        console.log(resultsFruits);
        res.send(resultsFruits);

    });
};

//PASO 6 CREAMOS OTRO CONTROLADOR PARA GUARDAR FRUTAS NUEVAS
//cada vez que creamos un controlador volvemos al paso 5 para crear llamada al controlador en index.js
controller.saveFruit = (req, res) => {
    let name_fruits = req.body.name_fruits;
    let color_fruits = req.body.color_fruits;
    let price = req.body.price;
    let quality = req.body.quality;
    let insertsql = 'INSERT INTO fruits set?';

    connection.query(insertsql, {name_fruits, color_fruits, price, quality},
        (error, saveresult) => {
            res.send('insert ok')
        }
    )
};
//PASO 7 PARA ELIMINAR FRUTA EXISTENTE
//VOLVEMOS A PASAO5 POARA LLAMAR A ESTE CONTROLADOR
controller.deleteFruit = (req,res)=>{
    let fruits_id = req.params.fruits_id;
    let deletesql = 'DELETE FROM fruits WHERE fruits_id ='
    connection.query(deletesql + fruits_id, (err,deleteFruit)=>{
        if(err){
            res.send('No existe ese ID');
            throw err;

        }
        res.send('Fruta eliminada correctamente');
    })
};


//PASO 8 PARA RECOGER FRUTA EXISTENTE
//VOLVEMOS A PASAO5 PARA LLAMAR A ESTE CONTROLADOR
controller.editFruit = (req,res)=>{
    let fruits_id = req.params.fruits_id;
    let editsql = `SELECT * FROM fruits WHERE fruits_id = '${fruits_id}'`;
    connection.query(editsql, (error, resultEdit)=>{
        res.send(resultEdit);
    })
};

//PASO 9 CREAMOS OTRO CONTROLADOR PARA ACTUALIZAR LA FRUTA EXISTENTE
//VOLVEMOS A PASAO5 PARA LLAMAR A ESTE CONTROLADOR
controller.updateFruit = (req, res)=>{
    let fruits_id = req.params.fruits_id; //ID QUE PASAMOS A LA URL
/*    let name_fruits =  req.body.name;
    let color_fruits =  req.body.color;
    let price =  req.body.price;
    let quality =  req.body.quality;*/
    let {name_fruits, color_fruits, price, quality} = req.body; //destructuring

    let updateSql = 'UPDATE fruits set? WHERE fruits_id=' ;
    connection.query(updateSql + fruits_id, {name_fruits, color_fruits, price, quality}, (error, resultsUpdate)=>{
    res.send(resultsUpdate);
    });

};


//EXPORTO LA VARIABLE CONTROLLER PARA UTILIZARLA EN LAS RUTA
module.exports = controller;