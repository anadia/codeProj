// Paso 1 requerimos la libreria de express y la metemos en una constante
const express = require('express');
// Paso 2 instaciamos la constate express(libreria) y la metemos en una constante para 
//utilizar sus metodos
//requerimos la libreria path que proporciona utilidades para trabajar con rutas de archivos y directorios
const path= require('path');

const app = express();
// Paso 3 utilizamos los metodos de http (get,post,put,delete) -> .....
// utilizamos el metodo get de express que recibe
//----> una "direccion",
//----> una funcion que tiene dos parametros req=> request, res=> response
// esta funcion recibe un res ( respuesta ) y con el metodo .send( Enviar ) envia X = String
app.get('/', function (req, res) {
    res.send('Bienvenidos a Codehouse');
});

app.get('/sobreNosotros', function (req, res) {
    res.send('Bienvenidos a sobre nosotros');
});

app.get('/index', function (req, res) {
    //enviamos un archivo
    res.sendFile('/home/oscar/Documentos/codeProj/NodeJS/express/index.html');
});

app.get('/index2', function (req, res) {
    //enviamos un archivo
    res.sendFile('/home/oscar/Documentos/codeProj/NodeJS/express/index2.html');
});

app.get('/rutaPath', function (req, res) {
    console.log(path.join(__dirname))
    //enviamos un archivo
    res.sendFile(path.join(__dirname + '/index.html'));
});



// Paso 4 escuchamos al servidor indicandole el puerto
app.listen(3000);


//crea un metod get que cuando en el url vayaa /sobreNosotros envien un mensaje -> "Bienvenidos a sobre nosostros"