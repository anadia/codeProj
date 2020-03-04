//  CONTROLADOR DE INDEX ROUTER
//PASO 1 REQUERIMOS LAS LIBRERIAS
const connection = require('../config/db');

//PASO 2 CREO UNA VALIABLE QUE ES UN OBJETO LA CUAL EXPORTO PARA UTILIZARLA
//EN EL ARICHIVO DE LA RUTA
const controller = {};

//PASO 3 CREAMOS UN CONTROLADOR CON UN NOMBRE UNICO PARA MISMO METODO HTTP 
//QUE UTILIZE (ESTE SERIA UN LISTADO DE FRUITS)

controller.listFruits = (req, res) => {

    let listsql = ' SELECT * FROM fruits';
    connection.query(listsql, (error, resultsFruits) => {
        console.log(resultsFruits);
        res.send('select de fruits OK');
    });
}
//PASO 6 CREAMOS OTRO CONTROLADOR PARA GUARDAR FRUTAS NUEVAS
//VOLVEMOS AL PASO 5 PARA LLAMAR A ESTE CONTROLADOR
controller.saveFruit = (req, res) => {
    let name_fruit = req.body.name_fruit;
    let color_fruit = req.body.color_fruit;
    let price = req.body.price;
    let quality = req.body.quality;

    let insertsql = 'INSERT INTO fruits set?';

    connection.query(insertsql, { name_fruit, color_fruit, price, quality },
        (error, saveresult) => {
            res.send('insert OK')
        }
    )
}

//PASO 7 CREAMOS OTRO CONTROLADOR PARA ELIMINAR FRUTA EXISTENTE
//VOLVEMOS AL PASO 5 PARA LLAMAR A ESTE CONTROLADOR
controller.deleteFruit = (req, res) => {
    let id_fruit = req.params.id_fruit;
    let deleteSql = 'DELETE FROM fruits WHERE id_fruit =';
    connection.query(deleteSql + id_fruit, (err, deleteFruit) => {
        if (err) {
            throw err;
        }
        res.send('Fruta eliminada correctamente');
    })
}

//PASO 8 CREAMOS OTRO CONTROLADOR PARA RECOGER FRUTA EXISTENTE
//VOLVEMOS AL PASO 5 PARA LLAMAR A ESTE CONTROLADOR
controller.editFruit = (req, res) => {
    let id_fruit = req.params.id_fruit;
    let editsql = `SELECT * FROM fruits WHERE id_fruit = '${id_fruit}' `;
    connection.query(editsql, (error, resultEdit) => {
        res.send(resultEdit);
    })
}

//PASO 9 CREAMOS OTRO CONTROLADOR PARA ACTUALIZAR LA FRUTA EXISTENTE
//VOLVEMOS AL PASO 5 PARA LLAMAR A ESTE CONTROLADOR

controller.updateFruit = (req, res) => {
    let id_fruit = req.params.id_fruit;
    let name_fruit = req.body.name_fruit;
    let color_fruit = req.body.color_fruit;
    let price = req.body.price;
    let quality = req.body.quality;
    // let { name_fruit, color_fruit, price, quality } = req.body;

    let updateSql = 'UPDATE fruits set? WHERE id_fruit =';
    connection.query(updateSql + id_fruit, { name_fruit, color_fruit, price, quality },
        (err, resultsUpdate) => {
            res.send(resultsUpdate);
        });

}

//ULTIMO PASO EXPORTO LA VARIBLE CONTROLLER PARA UTILIZARLA EN LAS RUTAS
module.exports = controller;