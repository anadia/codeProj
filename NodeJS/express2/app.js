//mpm init
//npm install express
// npm install path -save para forzar instalacion segura


const express = require('express');
const path = require('path');
const bodyparser = require('body-parser'); //parsear el body para analizar los datos


//inicializamos express para usar sus metodos
const app = express();


app.use(bodyparser.urlencoded({extended:true})); //para usar bodyparser



app.get('/',function(req,res){

    res.sendFile(path.join(__dirname + '/index.html'))

});

app.get('/register',function(req,res){

    res.sendFile(path.join(__dirname+ '/register.html'))
});


app.post('/',function(req,res){

    console.log(req.body.name);
    console.log(req.body.lastname);
    res.send('ok');
});


app.post('/register',function(req,res){

    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.lastname);
    console.log(req.body.city);
    console.log(req.body.age);
    console.log(req.body.email);
    console.log(req.body.password);
    res.send('ok');
});

app.listen(3000);

//instalamos nodemo para restaurar automaticamente server 
// en ubuntu usar root. Si falla comando:
// echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
