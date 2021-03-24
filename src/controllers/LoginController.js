const LoginService = require("../services/LoginService");

module.exports = {
    async login(req, res){
        if(!res.json(await LoginService.Login(req.body))){
            return res.json({error:"Incorrect email or password"})
        }

        return response.status(200).send();
    },
}