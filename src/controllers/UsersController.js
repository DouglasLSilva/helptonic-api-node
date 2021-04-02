const UserService = require("../services/UserService");
const Jwt = require('../Util/Jwt');

module.exports = {
    async register(req, res, next){
        try{
            const {email} = req.body;
            const existEmail = await UserService.getByEmail(email);

            if(existEmail != null){
                return res.status(400).json({message:"Email is already registered",error:true});
            }

            const response = await UserService.post(req.body)

            if(response == null){
                return res.status(400).json({message:"Error creating account",error:true});
            }

            const id = response['id']; 

            const tokenHash = await Jwt.createJwt(id);
            response['token'] = tokenHash
            return res.status(200).json(response);
        }
        catch(e)
        {
            return res.status(500).json({message:"Internal Server Error",error:true});
        }
    }   
}
