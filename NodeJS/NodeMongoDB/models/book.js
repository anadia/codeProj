//Aqui definimos el modelo, el esquema que equivale a la tabla de MySQL de nuestra bases de datos

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    //declaramos campos del esquema (tabla)
    titulo: String,
    edicion: String ,
    sinopsis: String,
    isbn: {type: Number, unique: true },
    genero: String
});
module.exports = mongoose.model('Books' , BookSchema);

