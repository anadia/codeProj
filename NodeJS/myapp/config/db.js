var mysql = require('mysql');


var connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'nodeimg'
    }
);

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
