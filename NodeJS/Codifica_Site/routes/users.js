var express = require('express');
var router = express.Router();


let usersController  = require('../controllers/usersController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('users');
});

router.get('/', usersController.listUsers) ;

router.post('/', usersController.createUser);

router.get('/delete/:fruits_id', usersController.deleteUser); //los metodos siempre sin paréntesis

router.get('/edit/:fruits_id', usersController.editUser); //los metodos siempre sin paréntesis

router.post('/update/:fruits_id', usersController.updateUser); //los metodos siempre sin paréntesis
module.exports = router;
