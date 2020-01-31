const HTTP = require('http');

//unico paso
HTTP.createServer(function (request, response){

    response.writeHead(200,{"Content-Type" : "text/plain"});

    response.write("mi segundo servidor con node js");

    response.end();
}).listen(8080);