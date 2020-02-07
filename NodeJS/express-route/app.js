const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); //parsear el body para analizar los datos

const app = express();
const userRoute = require('./routes/userRoute');
const articleRoute = require('./routes/articleRoute');

app.use(bodyParser.urlencoded({extended:true})); //para usar bodyparser

app.use('/', userRoute);
app.use('/articulo', articleRoute);
/* app.get('/',function(req,res){

    res.sendFile(path.join(__dirname + '/index.html'))

}); */


app.listen(8080);