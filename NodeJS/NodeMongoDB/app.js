var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//Requerimos la librería mongoose que es una librería para utilizar mongodb de manera
//mas fácil y rápida

const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

var indexRouter = require('./routes/index');
var booksRouter = require('./routes/books.js');
var usersRouter = require('./routes/users.js');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// Utilizamos user route
app.use('/users', usersRouter);
app.use('/books', booksRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next ) {
    next(createError(404 ));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
//utilizamos el método connect para conectarnos a mongodb =>
// indicándole el localhost
//el puerto de conexión de mongodb que es 27017
//y la base de datos a la que queremos conectarnos
mongoose.connect('mongodb://localhost:27017/Users',
    {useUnifiedTopology: true, useNewUrlParser: true},
    (err, res) => {
        if (err) {
            throw err;
        }
        console.log("Base de datos conectada")
    }
);
module.exports = app;
