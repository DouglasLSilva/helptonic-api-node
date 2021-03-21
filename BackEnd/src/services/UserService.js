const User = require("../models/User");
const connection = require("../dataBase/connection");

module.exports = {
    async list(){
        return await User.find({});
    },

    async post(params) {
        return await User.create(params);
    },
}