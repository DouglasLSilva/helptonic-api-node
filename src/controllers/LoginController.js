const LoginService = require("../services/LoginService");
const Jwt = require('../Util/Jwt');

module.exports = {
    async login(req, res){
        try{
            const response = await LoginService.Login(req.body);

            if(response == null){
                return res.status(404).json({message:"Incorrect email or password", error:true})
            }
            const id = response['id']; 

            const tokenHash = await Jwt.createJwt(id);

            return res.status(200).json({obj:response , token:tokenHash});
        }
        catch(e)
        {
            return res.status(500).json({message:"Internal Server Error", error:true});
        }
    },
}