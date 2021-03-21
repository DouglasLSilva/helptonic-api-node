const User = require("../models/User");
const connection = require("../dataBase/connection");

module.exports = {
    async list(){
        return await User.find({});
    },

    async getById(params){
        const {id} = params;

        if(id == undefined){
            return {error: 'id undefined'};
        }

        return await User.find({_id : id});
    },

    async put(params){
        const {_id} = params;

        if(_id == undefined){
            return {error: 'id undefined'};
        }
            
        await User.findByIdAndUpdate(_id, params);

        return true;
    },

    async post(params) {
        const {_id} = await User.create(params);

        return _id;   
    },

    async delete(params) {
        const {id} = params;

        if(id == undefined){
            return {error: 'id undefined'};
        }
        
        const {n} = await User.deleteOne({_id : id});

        return n == 1;
    },
}