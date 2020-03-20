var express = require('express');
var router = express.Router();
const User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
 // método find para la búsqueda de todos los usuarios = select de toda la tabla GetAll
  User.find({}, (err,users)=>{
    res.send("Todos los usuarios");
    console.log(users);
  })
});

//búsqueda por id
router.get('/:idUser', function(req, res, next) {
  // método find para la búsqueda de todos los usuarios = select de toda la tabla
  let idUser = req.params.idUser;
  User.findById(idUser, (err,result)=>{
    res.send("Usuario por ID");
    console.log(result);
  })
});


// añadir usuario
router.post('/saveUser', function(req, res, next) {
  // método find para la búsqueda de todos los usuarios = select de toda la tabla
  let user = new User();
  user.name = req.body.name;
  user.surname = req.body.surname;
  user.coloreyes = req.body.coloreyes;
  user.age = req.body.age;
  user.dni = req.body.dni;
// usuario ya se le pasa en save
  user.save((err,result)=>{
    res.send("Usuario guardado");
    console.log(result);
  })
});


//delete pasando el id route con delete
/*router.delete('/deleteUser/:idUser', (req, res) => {
  let idUser = req.params.idUser;
  User.findById(idUser, (err, result) => {
    result.remove(err => {
      res.send("Usuario eliminado");
    })
  })
});*/
// delete con get
router.get('/deleteUser/:idUser', (req, res) => {
  let idUser = req.params.idUser;
  User.findById(idUser, (err, result) => {
    result.remove(err => {
      res.send("Usuario eliminado");
    })
  })
});

//update
router.put('/updateUser/:idUser', (req, res) => {
  let idUser = req.params.idUser;
  let update = req.body;

  User.findByIdAndUpdate(idUser, update, (err, result) => {
      res.send("Actualizado");
      console.log(result);
    })
});
module.exports = router;

