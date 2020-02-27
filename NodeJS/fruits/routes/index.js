var express = require('express');
var router = express.Router();
//PASO 4 LLAMAMOS AL ARCHIVO INDEXCONTROLLER Y LO DECLARAMOS EN UNA VARIABLE
let fruitController  = require('../controllers/indexController');

/* GET home page. */
//PASO 5 EN LA RUTA LLAMO AL CONTROLADOR QUE QUIERO PAR UTILIZAR SU LOGICA CONCRETA
router.get('/', fruitController.listFruits) ;

router.post('/', fruitController.saveFruit);

router.get('/delete/:fruits_id', fruitController.deleteFruit); //los metodos siempre sin paentesis

router.get('/edit/:fruits_id', fruitController.editFruit); //los metodos siempre sin paentesis

router.post('/update/:fruits_id', fruitController.updateFruit); //los metodos siempre sin paentesis

module.exports = router;
