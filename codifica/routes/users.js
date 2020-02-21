//constantes generales de aplicación
const express = require('express');
const router = express.Router();
const connection = require('../config/db.js'); //ruta config base de datos


//indicamos la ruta que renderiza la vista
router.get('/', function(req, res, next) {
  console.log('Time:', Date.now());
  res.render('user/users', { title: 'Express' });
});

module.exports = router;


