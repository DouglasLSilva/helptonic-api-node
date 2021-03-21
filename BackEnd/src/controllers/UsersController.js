const User = require("../models/User");
const connection = require("../dataBase/connection");

module.exports = {
    async store(req, res){       
        const data = await User.create(req.body);

        return res.json(data);
    },

    async index(req, res){
        const data = await User.find({});

        return res.json(data);
    }
}
