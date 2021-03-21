const UserService = require("../services/userService");

module.exports = {
    async list(req, res){
        return res.json(await UserService.list());
    },

    async put(req, res){
        return res.json(await UserService.put(req.body));
    },

    async post(req, res){       
        return res.json(await UserService.post(req.body));
    },

    async delete(req, res){
        return res.json(await UserService.delete(req.body))
    }
}
