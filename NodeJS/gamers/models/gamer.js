//Aqui definimos el modelo, el esquema que equivale a la tabla de MySQL de nuestra bases de datos

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GamerSchema = new Schema({
    //declaramos campos del esquema (tabla)
    name: String,
    lastname: String,
    nickname:  {type: String, unique: true },
    game: String,
    password: String
});
module.exports = mongoose.model('Gamers' , GamerSchema);

