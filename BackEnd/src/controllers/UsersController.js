const UserService = require("../services/userService");

module.exports = {
    async post(req, res){       
        // const data = await User.create(req.body);
        return res.json(await UserService.post(req.body));
    },

    async list(req, res){
        return res.json(await UserService.list());
    }
}
