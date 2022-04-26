const Produto = require("../models/Produto");
const CategoriaService = require("./CategoriaService");


module.exports = {
    async list(){
        var produtos = await Produto.find({});
        return produtos;
    },

    async getById(params){
        const {id} = params;

        if(id == undefined){
            return {error: 'id undefined'};
        }
        
        var produto = await Produto.find({_id : id});
        return produto;
    },

    async put(params){
        const {_id} = params;

        if(_id == undefined){
            return {error: 'id undefined'};
        }
            
        await Produto.updateOne({_id : _id}, params);

        return true;
    },

    async post(params) {
        const {_id} = await Produto.create(params);

        return _id;   
    },

    async delete(params) {
        const {id} = params;

        if(id == undefined){
            return {error: 'id undefined'};
        }
        
        const {n} = await Produto.deleteOne({_id : id});

        return n == 1;
    },
}