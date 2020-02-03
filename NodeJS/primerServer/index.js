const HTTP = require('http');

// console.log(HTTP);

// Servidor con la opción simple
// PASO 1 ---- crear una funcion

function serve(request, response){ //suele recibir 2 parametros tb req y res. Puede llamarse distinto de serve
    console.log("peticion recibida");

    response.writeHead(200,{"Content-Type" : "text/plain"}); //recibe 2 par el Estado un 200 OK

    response.write("mi primer servidor con node js");

    response.end();
}

// PASO 2 ----------- crear variable server donde utilizamos la constante de HTTP con su metodo

let server = HTTP.createServer(serve);


// PASO 3 --------- escuchar un puerto / socket

server.listen(8080); //

