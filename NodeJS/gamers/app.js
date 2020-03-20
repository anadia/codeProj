var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

var indexRouter = require('./routes/index');
var singleGameRouter = require('./routes/singleGame.js');
var gamersRouter = require('./routes/gamers.js');
var sha1 = require('sha1');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/singleGame', singleGameRouter);
app.use('/gamers', gamersRouter);


mongoose.connect('mongodb://localhost:27017/Games',
    {useUnifiedTopology: true, useNewUrlParser: true},
    (err, res) => {
        if (err) {
            throw err;
        }
        console.log("Base de datos conectada")
    }
);
module.exports = app;
