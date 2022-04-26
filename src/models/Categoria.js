const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategoriaModelSchema = new Schema({
    descricao: String
});

module.exports = mongoose.model('Categoria', CategoriaModelSchema)