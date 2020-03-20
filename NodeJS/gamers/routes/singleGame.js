var express = require('express');
var router = express.Router();

//llamar al controlador

const singleGameController = require('../controllers/singleGameController');
//usamos el método get y llamamos al método que necesitamos del controller SingleGame

router.get('/', singleGameController.getSingleGames);

router.get('/:idSingleGame', singleGameController.getSingleGameById);

router.post('/saveSingleGame', singleGameController.saveSingleGame);

router.delete('/deleteSingleGame/:idSingleGame', singleGameController.deleteSingleGame);
router.post('/updateSingleGame/:idSingleGame', singleGameController.updateSingleGame);

module.exports = router;

