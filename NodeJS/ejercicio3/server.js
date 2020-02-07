const express = require('express');

const path= require('path');

const app = express();



app.get('/', function (req, res) {

    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/index2', function (req, res) {

    res.sendFile(path.join(__dirname + '/index2.html'));
});

app.get('/index3', function (req, res) {

    res.sendFile(path.join(__dirname + '/index3.html'));
});

app.get('/index4', function (req, res) {

    res.sendFile(path.join(__dirname + '/index4.html'));
});

app.listen(8443);