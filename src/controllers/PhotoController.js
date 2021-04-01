const PhotoService = require("../services/PhotoService");

module.exports = {

    async getById(req, res, next){
        const {response, message, error} = await PhotoService.getById(req.body)
        if(error == true){
            return res.status(404).json({error: message})
        }                

        return res.status(200).json(response);
    },

    async post(req, res, next){       
        const {response, message, error} = await PhotoService.post(req.body)
        if(error == true){
            return res.status(404).json({error: message})
        } 

        return res.status(200).json(response);
    },

    async delete(req, res, next){
        const {response, message, error} = await PhotoService.getById(req.body)

        if(error == true){
            return res.status(404).json({error: message})
        }  

        const data = await PhotoService.delete(req.body);

        if(!data){
            res.status(404).json({error:"Register doesn't exist"});
        }
        
        return res.status(200).json(response);
    }
}