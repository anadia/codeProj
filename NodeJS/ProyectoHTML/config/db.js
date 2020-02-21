var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'codifica'
});

connection.connect(
    function (error){
        if (error){
            throw error;
        }
        else{
            console.log('connection to database succesfully')
        }
    }
);

module.exports= connection;