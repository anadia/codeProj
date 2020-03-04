var express = require('express');
var router = express.Router();
//PASO 4 LLAMAMOS AL ARCHIVO indexController Y LO DECLARAMOS EN UNA VARIABLE
let fruitController = require('../controllers/indexController.js')
// console.log(fruitController.listFruits)

//PASO 5 EN LA RUTA LLAMO AL CONTROLLADOR QUE QUIERO UTILIZAR PARA 
//APLICAR SU LOGICA(SEA LO QUE SEA)
router.get('/', fruitController.listFruits);
router.post('/', fruitController.saveFruit);
router.get('/delete/:id_fruit', fruitController.deleteFruit);
router.get('/edit/:id_fruit', fruitController.editFruit);
router.post('/update/:id_fruit', fruitController.updateFruit);



module.exports = router;
