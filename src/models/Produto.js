const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProdutoModelSchema = new Schema({
    descricao: String,
    categoria: String,
    quantidadeEstoque: Number,
    estoqueMinimo: Number,
    ativo: Boolean
});

module.exports = mongoose.model('Produto', ProdutoModelSchema)