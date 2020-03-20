var express = require('express');
var router = express.Router();

//llamar al controlador

const userController = require('../controllers/userController');
//usamos el método get y llamamos al método que necesitamos del controller user
router.get('/', userController.getUsers);

router.get('/:idUser', userController.getUserById);

router.post('/saveUser', userController.saveUser);

router.delete('/deleteUser/:idUser', userController.deleteUser);
router.post('/updateUser/:idUser', userController.updateUser);

module.exports = router;

