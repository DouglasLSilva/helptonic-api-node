const Categoria = require("../models/Categoria");

module.exports = {
    async list(){
        return await Categoria.find({});
    },

    async getById(params){
        const {id} = params;

        if(id == undefined){
            return {error: 'id undefined'};
        }

        return await Categoria.find({_id : id});
    },

    async put(params){
        const {_id} = params;

        if(_id == undefined){
            return {error: 'id undefined'};
        }
            
        await Categoria.updateOne({_id : _id}, params);

        return true;
    },

    async post(params) {
        const {_id} = await Categoria.create(params);

        return _id;   
    },

    async delete(params) {
        const {id} = params;

        if(id == undefined){
            return {error: 'id undefined'};
        }
        
        const {n} = await Categoria.deleteOne({_id : id});

        return n == 1;
    },
}