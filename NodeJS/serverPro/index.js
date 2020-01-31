const HTTP = require('http');

//unico paso
HTTP.createServer(function (request, response){

    response.writeHead(200,{"Content-Type" : "text/html"});

    response.write('<html><head></head><body><h1>Oscar Rules</h1></body></html>');

    response.end();
}).listen(8080);