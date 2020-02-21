//constantes generales de aplicación
const express = require('express');
const router = express.Router();
const connection = require('../config/db.js'); //ruta config base de datos

//INSERT de datos
// hacemos un get de los datos de usuario en la BBDD
router.get('/', function (req, res, next) {

    connection.query('SELECT * FROM user', function (err, data) {

        if (err) {
            throw err;
        }
        else {
            res.render('admin_users/index_admin_users', { data: data });
        }
    });

});

//tomamos los datos leidos del formulario de inserción de index_admin_users.ejs
router.post('/', function (req, res) {
    // console.log(req.body);

    let name = req.body.name;
    let email = req.body.email;
    let user = req.body.user;
    let password = req.body.password;
    let avatar = req.body.avatar;

// insertamos los datos de user con un insert en la base de datos
    let sql = "INSERT INTO user set? ";

    connection.query(sql, { name, email, user, password, avatar }, (error, users) => {
        console.log(users.insertId);
        let id_user = users.insertId; //tomamos en un variable el id de inserción
        if (error) {
            throw error;
        }
            res.redirect('/'); //redirigimos a root?
        })

});

//DELETE del usuario por id
router.get('/admin_users/delete/:id', function (req, res) {

    let id = req.params.user_id; //tomamos en una variable el id

        connection.query("DELETE  FROM user WHERE  user_id = " + id, function (err, result) {
            res.redirect('/')
        })

});

//EDITAMOS el usuario por id
router.get('/admin_users/edit/:id', function (req, res) {

    let id = req.params.user_id;

    connection.query("SELECT * FROM user WHERE user_id = ?", [id], (err, results) => {

            res.render('edit_user', {  //editamos en la vista individual
                results: results[0]
            });

    });

});
// UPDATE
// recogemos los datos del usuario del body de forma individual
router.post("/update/:id", function (req, res) {
    let id = req.params.user_id;
    let name = req.body.name;
    let email = req.body.email;
    let user = req.body.user;
    let password = req.body.password;
    let avatar = req.body.avatar;
    console.log(req.body);

    let sql = "UPDATE INTO user set? WHERE user_id" + id;

    connection.query('UPDATE user set? WHERE user_id = ' + id, { name, email, user, password, avatar },
        (err, result) => {


                    res.redirect('/');

        })
});



module.exports = router;
