//Aqui definimos el modelo, el esquema que equivale a la tabla de MySQL de nuestra bases de datos

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SingleGameSchema = new Schema({
    //declaramos campos del esquema (tabla)
    nameGame: {type: String, unique: true },
    descriptionGame: String,
    modality: String
});
module.exports = mongoose.model('SingleGame' , SingleGameSchema);

