const User = require("../models/User");
const connection = require("../dataBase/connection");
const cript = require("../Util/Crypt")


module.exports = {

    async getByEmail(email){
        return await User.findOne({email : email});
    },

    async getById(idUser){
        const user = await User.findOne({_id:idUser}).lean();

        return user;
    },

    async post(params) {     
        params['password']= cript.crypt(params['password']);

        const response = await User.create(params);

        response['password'] = "";  
        
        return response;   
    },
}