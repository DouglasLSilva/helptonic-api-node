const UserService = require("../services/UserService");
const Jwt = require('../Util/Jwt');

module.exports = {
    async register(req, res, next){
        try{
            const {email} = req.body;
            const existEmail = await UserService.getByEmail(email);

            if(existEmail != null){
                return res.status(404).json({error:"Email is already registered"});
            }

            const response = await UserService.post(req.body)

            if(response == null){
                return res.status(404).json({error:"Error creating account"});
            }

            const id = response['id']; 

            const tokenHash = await Jwt.createJwt(id);

            return res.status(200).json({obj:response, token:tokenHash});
        }
        catch(e)
        {
            return res.status(500).json({error:"Internal Server Error"});
        }
    }   
}
