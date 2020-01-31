/* llamar a funcion
contiene servidor 
que se puede llamar desde el puerto 3000

en la consola aparezca el servidor corre en el puerto total y me aparezca el resultado de la funcion

el servidor html con un h1 */

const DIVIDIR = require('./funcion.js');
DIVIDIR.division(5,2);

const HTTP = require('http');

HTTP.createServer(function (request, response){

    response.writeHead(200,{"Content-Type" : "text/html"});

    response.write('<html><head></head><body><h1>Server Online</h1><p>Server 1</p></body></html>');

    response.end();
}).listen(3000);