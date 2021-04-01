const User = require("../models/User");
const connection = require("../dataBase/connection");
const cript = require("../Util/Crypt")


module.exports = {

    async getByEmail(email){
        return await User.findOne({email : email});
    },

    async post(params) {     
        params['password']= cript.crypt(params['password']);

        const response = await User.create(params);

        response['password'] = "";  
        
        return response;   
    },
}