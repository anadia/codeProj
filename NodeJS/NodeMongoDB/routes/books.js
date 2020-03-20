var express = require('express');
var router = express.Router();
const Book = require('../models/book');

/* GET books listing. */
router.get('/', function(req, res, next) {
    // método find para la búsqueda de todos los usuarios = select de toda la tabla GetAll
    Book.find({}, (err,books)=>{
        res.send("Todos los Libros");
        console.log(books);
    })
});

//búsqueda por id
router.get('/:idBook', function(req, res, next) {
    // método find para la búsqueda de todos los usuarios = select de toda la tabla
    let idBook = req.params.idBook;
    Book.findById(idBook, (err,result)=>{
        res.send("Book por ID");
        console.log(result);
    })
});


// añadir libro
router.post('/saveBook', function(req, res, next) {
    // método find para la búsqueda de todos los usuarios = select de toda la tabla
    let book = new Book();
    
    book.titulo = req.body.titulo;
    book.edicion = req.body.edicion;
    book.sinopsis = req.body.sinopsis;
    book.isbn = req.body.isbn;
    book.genero = req.body.genero;

// book  se le pasa en save
    book.save((err,result)=>{
        res.send("Book guardado");
        console.log(result);
    })
});


//delete pasando el id route con delete
/*router.delete('/deleteBook/:idBook', (req, res) => {
  let idBook = req.params.idBook;
  Book.findById(idBook, (err, result) => {
    result.remove(err => {
      res.send("Libro eliminado");
    })
  })
});*/
// delete con get
router.get('/deleteBook/:idBook', (req, res) => {
    let idBook = req.params.idBook;
    Book.findById(idBook, (err, result) => {
        result.remove(err => {
            res.send("Libro eliminado");
        })
    })
});

//update
router.put('/updateBook/:idBook', (req, res) => {
    let idBook = req.params.idBook;
    let update = req.body;

    Book.findByIdAndUpdate(idBook, update, (err, result) => {
        res.send("Actualizado");
        console.log(result);
    })
});
module.exports = router;

