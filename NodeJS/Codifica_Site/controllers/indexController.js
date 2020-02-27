const connection = require('../config/db');

const controller = {};

//Listar usuarios
controller.listUsers = (req, res) => {
    let listSql = 'SELECT * FROM user';
    connection.query(listSql, (error, resultsUsers) => {
        console.log(resultsUsers);
        res.send(resultsUsers);

    });
};

//Crear User con INSERT
controller.createUser = (req, res) => {
    console.log(req.body);
    let name = req.body.name;
    let email = req.body.email;
    let user = req.body.user;
    let password = req.body.password;
    let avatar = req.file.originalname;

    let insertSql = 'INSERT INTO user set?';

    connection.query(insertSql, { name, email, user, password ,avatar},
        (error, createResult) => {
            res.redirect('/users');
        }
    )
};

//Borrar usuario con DELETE FROM table
controller.deleteUser = (req,res)=> {
    let user_id = req.params.user_id;
    let deleteSql = 'DELETE FROM user WHERE user_id =';
    connection.query(deleteSql + user_id, (err, deleteUser) => {
        if (!user_id) {
            res.send('El usuario no existe en la Base de datos');
            throw err;
        }
        res.redirect('/users')
    })
};

//Actualizamos datos de User con UPDATE
controller.updateUser= (req, res)=>{
    let user_id = req.params.user_id; //toma el ID de la URL
    let { name, email, user, password ,avatar} = req.body;

    let updateSql = 'UPDATE user set? WHERE user_id=' ;
    connection.query(updateSql + user_id, {name, email, user, password ,avatar}, (error, resultsUpdate)=>{
        res.render('user', {
            results: resultsUpdate[0]
        })
    })
};

//Exportamos el Controller
module.exports = controller;