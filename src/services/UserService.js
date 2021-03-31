const User = require("../models/User");
const connection = require("../dataBase/connection");
const cript = require("../Util/Crypt")


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
    async getByEmail(email){
        if(email == undefined){
            return {error: 'email undefined'};
        }

        return await User.find({email : email});
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
        params['password']= cript.crypt(params['password']);

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