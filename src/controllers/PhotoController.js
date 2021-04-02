const PhotoService = require("../services/PhotoService");

module.exports = {

    async getById(req, res, next){
        try{
            const {response, message, error} = await PhotoService.getById(req.body)

            if(error == true){
                return res.status(404).json({error: message})
            }                

            return res.status(200).json(response);
        }
        catch(e){
            return res.status(500).json({message:"Internal Server Error", error:true});            
        }
    },

    async post(req, res, next){       
        try{

            const {response, message, error} = await PhotoService.post(req.body)

            if(error == true){
                return res.status(404).json({error: message})
            } 

            return res.status(200).send(true);
        }
        catch(e){
            return res.status(500).json({message:"Internal Server Error", error:true});            
        }
    },

    async delete(req, res, next){
        try
        {
            const {message, error} = await PhotoService.delete(req.body);

            if(error){
                res.status(404).json({message:message});
            }
            
            return res.status(200).json(true);
        }
        catch(e){
            return res.status(500).json({message:"Internal Server Error", error:true});            
        }
    }
}