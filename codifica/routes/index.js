//constantes generales de aplicación
const express = require('express');
const router = express.Router();
const connection = require('../config/db.js'); //ruta config base de datos

//renderiza página principal index.ejs

router.get('/', function(req, res, next) {

  res.render('index', { title: 'Codifica' });

});





module.exports = router;



