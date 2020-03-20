//Aqui definimos el modelo, el esquema que equivale a la tabla de MySQL de nuestra bases de datos

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
        //declaramos campos del esquema (tabla)
    name: {type: String, unique: true },
    surname: String,
    coloreyes: String,
    age: Number,
    dni: String
});
module.exports = mongoose.model('Users' , UserSchema);

