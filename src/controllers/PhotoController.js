const PhotoService = require("../services/PhotoService");

module.exports = {

    async getById(req, res){
        return res.json(await PhotoService.getById(req.body));
    },

    async post(req, res){       
        return res.json(await PhotoService.post(req.body));
    },

    async delete(req, res){
        const data = await PhotoService.delete(req.body);

        if(!data){
            res.json({error:"Register doesn't exist"});
        }
        
        return res.status(200).send();
    }
}