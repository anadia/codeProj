var express = require('express');
var router = express.Router();
const connection = require('../config/db.js');
/* obtener listado de usuarios */


    router.get('/', function (req, res, next) {
      
      let sql = 'SELECT * FROM empleado';
      connection.query(sql, (err, data) => {
        if (err) {
          throw err;
        } else {
          res.render('empleados', { data: data });
        }
        console.log(data);
      });
    
    });
    router.post('/',function(req,res){ 
        let nombre = req.body.nombre;
        let apellido = req.body.apellido;
        let edad = req.body.edad;
        let email = req.body.email;
        let password = req.body.password;
       
        let sql2 = "INSERT INTO empleado set? ";
        connection.query(sql2, { nombre, apellido, edad, email, password }, (err, result) => {
          if (err) {
            throw err;
          }
          res.redirect('/empleados');
        });
      
        
      });