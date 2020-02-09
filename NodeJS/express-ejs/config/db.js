var mysql      = require('mysql');
var connection = mysql.createConnection({ //a veces se escribe conn
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'express'
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