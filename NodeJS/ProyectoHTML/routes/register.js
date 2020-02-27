var express = require('express');
var router = express.Router();
const connection = require('../config/db.js');


router.get('/', function (req, res, next) {

    connection.query('SELECT * FROM user ', (err, data) => {
        if (err) {
            throw err;
        } else {
            // console.log(data)
            res.render('register', { data: data })
        }
    })
});

router.post('/', function (req, res, next) {

    console.log(req.body);
    let name = req.body.name;
    let email = req.body.email;
    let user = req.body.user;
    let password = req.body.password;
   /* let password_repeat = req.body.password_repeat;*/
    connection.query('INSERT INTO user set? ', { name, email, user, password}, (err, data) => {
        res.render('confirmation');
    });
/*  connection.query('INSERT INTO user set? ', { name, email, user, password ,avatar}, (err, data) => {
        res.redirect('/users');
      });
    if(connection.query('SELECT * FROM user WHERE email ='+ req.body.email) === false
        ||connection.query('SELECT * FROM user WHERE email ='+ req.body.email) === undefined) {
        connection.query('INSERT INTO user set? ', {name, email, user, password}, (err, data) => {
            res.redirect('/');
        });

    }
        else{

        document.getElementById("errorRegister").innerHTML = "Ese email esta registrado o no es válido.";
        }


*/


});

module.exports = router;

