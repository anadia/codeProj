//Requerimos la libreria de mysql para poder crear la conexion
var mysql = require('mysql');

// mysql.createConnection => utilizamos el metodo createConnection de
// mysql para crear la conexion
var connection = mysql.createConnection(
    {
        // host => el host en el que estamo trabajando
        host: 'localhost',
        //user => nombre del usuario de Base de datos
        user: 'root',
        // password => constraseña del usuario
        // si no tengo constraseña lo dejaria VACIO  (password: '',)
        password: 'root',
        // database => el nombre de la base de datos que voy a utilizar
        database: 'fruits'
    }
);
//utilizamos la variable connection que tiene la creacion de la conexion y utlizamos el metodo
//de mysql connect para establecer la conexion
connection.connect(
    function (error) {
        if (error) {
            throw error;
        } else {
            console.log("Conexion a BD correcta");
        }
    }
);

module.exports = connection;
