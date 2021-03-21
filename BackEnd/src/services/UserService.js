const User = require("../models/User");
const connection = require("../dataBase/connection");

module.exports = {
    async list(){
        return await User.find({});
    },

    async put(params){
        const {_id} = params;
        return await User.findByIdAndUpdate(_id, params);
    },

    async post(params) {
        return await User.create(params);
    },

    async delete(params) {
        const {id} = params;
        return await User.deleteOne({_id : id});
    },
}