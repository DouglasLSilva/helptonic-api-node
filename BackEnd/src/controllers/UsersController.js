const UserService = require("../services/userService");

module.exports = {
    async post(req, res){       
        return res.json(await UserService.post(req.body));
    },

    async list(req, res){
        return res.json(await UserService.list());
    }
}
