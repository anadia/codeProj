var express = require('express');
var router = express.Router();

//llamar al controlador

const gamersController = require('../controllers/gamersController');
//usamos el método get y llamamos al método que necesitamos del controller Gamer
router.get('/', gamersController.getGamers);

router.get('/:idGamer', gamersController.getGamerById);

router.post('/saveGamer', gamersController.saveGamer);

router.delete('/deleteGamer/:idGamer', gamersController.deleteGamer);
router.post('/updateGamer/:idGamer', gamersController.updateGamer);
router.post('/tokenGamer', gamersController.tokenGamer);

module.exports = router;

