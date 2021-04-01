const LoginService = require("../services/LoginService");
const Jwt = require('../Util/Jwt');

module.exports = {
    async login(req, res){
        try{
            const response = await LoginService.Login(req.body);

            if(response == null){
                return res.status(404).json({error:"Incorrect email or password"})
            }
            const id = response['id']; 

            const tokenHash = await Jwt.createJwt(id);

            return res.status(200).json({obj:response , token:tokenHash});
        }
        catch(e)
        {
            return res.status(500).json({error:"Internal Server Error"});
        }
    },
}