var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const User = require('./models/user');
const Book = require('./models/book');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/CHULETAusersROUTES');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.get('/', (req, res) => {
    //metodo de mongoose find equivalente al Select
    //recibe dos parametros 1 un objeto vacio, y 2 una variable results que es resultado de todos los usuarios de la coleccion
    User.find({}, (err, results) =>{
        res.send('Ok');
        // resultados de la coleccion users
        console.log(results);
    })
});
app.get('/:userId', (req,res) =>{
    let userId =req.params.userId;
//devulve el objeto del usuario con ese id en concreto
    User.findById(userId,(err,result)=>{
        res.send('Funciona');
        console.log(result);
    });

});

app.post('/user',(req, res)=>{
   //creamos una variable con un nuevo User
    //En MongoDB se creara un objeto con un nuevo usuario
    let user = new User();
    //equivalente de user.name = let name;
    user.name = req.body.name;
    user.surname = req.body.surname;
    user.coloreyes = req.body.coloreyes;
    user.age = req.body.age;
    user.dni = req.body.dni;

//Utilizamos el metodo save para guardar los datos
    user.save((err,result)=>{
        res.send("Guardado!");
        console.log(result);
    })
});

app.delete('/delete/:idUser', (req, res) => {
    //recogemos el id del usuario => req.params
    let idUser = req.params.idUser;

    //usamos el metodo finById para buscar el usuario con ese id especifico
    User.findById(idUser, (err, result) => {
        //una vez tengamos el usuario => usamos el metodo remove para eliminarlo
        result.remove(err => {
            //enviamos el error si lo hubiera
            if (err) {
                throw err;
            }
            //una respuesta
            res.send("eliminado")
        })
    })
});

//actualizar
app.put('/updateUser/:idUser', (req, res) => {
    let idUser = req.params.idUser;
    //recogemos todos los campos del body
    let update = req.body;
    //primero le pasamos el id del usuario que queremos actualizar
    //segundo le pasamos el contenido del req.body=> el contenido que queremos actualizar
    //tercero le pasamos un err y results
    User.findByIdAndUpdate(idUser, update, (err, results) => {
        console.log(results);
        res.send("Actualizado");
    })
})

////


app.get('/', (req, res) => {
    //metodo de mongoose find equivalente al Select
    //recibe dos parametros 1 un objeto vacio, y 2 una variable results que es resultado de todos los usuarios de la coleccion
    User.find({}, (err, results) =>{
        res.send('Ok');
        // resultados de la coleccion books
        console.log(results);
    })
});
app.get('/:bookId', (req,res) =>{
    let bookId =req.params.bookId;
//devulve el objeto del usuario con ese id en concreto
    User.findById(userId,(err,result)=>{
        res.send('Funciona');
        console.log(result);
    });

});

app.post('/book',(req, res)=>{
    //creamos una variable con un nuevo User
    //En MongoDB se creara un objeto con un nuevo usuario
    let book = new Book();

    book.titulo = req.body.titulo;
    book.edicion = req.body.edicion;
    book.sinopsis = req.body.sinopsis;
    book.isbn = req.body.isbn;
    book.genero = req.body.genero;


//Utilizamos el metodo save para guardar los datos
    book.save((err,result)=>{
        res.send("Guardado!");
        console.log(result);
    })
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
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

mongoose.connect('mongodb://localhost:27017/Users',
    {useUnifiedTopology: true, useNewUrlParser: true},
    (err, res) => {
        if (err) {
            throw err;
        }
        console.log("MongoDB conectada con Éxito")
    }
);




module.exports = app;
