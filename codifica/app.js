//requires generales de módulos del proyecto
const createError = require('./node_modules/http-errors');
const express = require('./node_modules/express');
const path = require('path');
const cookieParser = require('./node_modules/cookie-parser');
const logger = require('./node_modules/morgan');

//requires de routes
var indexRouter = require('./routes/index');
var admin_usersRouter = require('./routes/admin_users');
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var usersRouter = require('./routes/users');


// función express para la variable app
var app = express();

// configuración del motor de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// usos para app
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//usos de la app para Routes con su carpeta

app.use('/', indexRouter);

app.use('/admin_users', admin_usersRouter);

app.use('/user', registerRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);


// catch errores 404 y envio a manejador de errores
app.use(function(req, res, next) {
  next(createError(404));
});

// manejador de errores
app.use(function(err, req, res, next) {
  // establecer locales y errores en desarrollo
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // renderizar la página de error
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;