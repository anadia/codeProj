var express = require('express');
var router = express.Router();
const connection = require('../config/db.js')


/* router.get('/', function (req, res, next) {
  connection.query('SELECT * FROM user', (err, data) => {
    if (err) {
      throw err;
    } else {
      res.render('users', { data: data });
    }
    console.log(data[0].name);
  })
}); */
//    <%= data[0].user.id %> 

var obj = {};
router.get('/', function(req, res){

    connection.query('SELECT * FROM user', function(err, result) {

        if(err){
            throw err;
        } else {
            obj = {users: result};
            res.render('users', obj);                
        }
    });

});


router.post('/', function(req,res){
  console.log(req.body);

  //PASO 1 creo las variables con el req.body de los inputs
  let name= req.body.name;
  let lastname = req.body.lastname;
  let phone =req.body.phone;
  let email= req.body.email;
  // let sql = "INSERT INTO  `user` (`name`, `lastname`, `phone`,`email` ) VALUES  ('" + name + " ',' " + lastname + " ',' " + email + " ',', " + phone + " ')";

  //PASO 2 cre una variable con la query
  //el (set?) de esta query hace referencia a todos los campos de la tabla user
  let sql2 = "INSERT INTO user set? ";

  //PASO 3 llamo al metodo connection.query que recibe 3 parametros
  //---> Primer parametro la variable de la query
  //---> Segundo parametro ENTRE LLAVES las variables que recojo del req.body
  //---> Tercero un arrow function con la respuesta
  // LOS NOMBRES DE LAS VARIABLES TIENEN QUE COINCIDIR CON LOS DE LA TABLA DE BBDD
  connection.query(sql2, {name,lastname, email,phone}, (err, result)=>{
    if (err){
      throw err;
    }
    res.redirect('/users');
  });

});
  /*   connection.query(sql,(err, result) => {
      if (err) {
        throw err;
      }
      res.redirect('/users');
    }); */

  // res.redirect('/users');

  router.get('/delete/:user_id', function (req, res) {
    console.log(req.params.user_id)
    //PASO 1 recojo el id del usuario de la ruta(URL) con el req.params.user_id
    let user_id = req.params.user_id;

    //PASO 2 declaramos la query DELETE FROM users (tabla) WHERE
    //user_id y lo concatenamos con la variable user_id que hemos declarado arriba y contiene el req.params.users_id
    connection.query("DELETE  FROM user WHERE  user_id = " + user_id,
      function (err, result) {
        //PASO 3 redireccionamos
        res.redirect('/users')
      })
  })


router.get('/edit/:user_id', function(req,res){
  //PASO 1 Recojo el user_id
  let user_id = req.params.user_id;
  //PASO 2 hacemos la query de la tabla user donde el user_id sea igual a la variable que
  //hemos creado arriba
  connection.query("SELECT * FROM user WHERE user_id = ?",[user_id], (err, results) =>{
    //PASO 3 renderizo la nueva vista USER => singular, donde le paso (results[0]) => que
    //tiene todos los datos de ese usuario en concreto
    res.render('user',{results:results[0]});
    console.log(results);
  })
});

router.post("/update/:user_id", function(req,res){
  let user_id = req.params.user_id;
  let name = req.body.name;
  let lastname = req.body.lastname;
  let email = req.body.email;
  let phone = req.body.phone;

  connection.query('UPDATE user set? WHERE user_id = ' + user_id, {name,lastname,email,phone} ,(err, results)=>{
    res.redirect('/users');
  })
});

module.exports = router;
