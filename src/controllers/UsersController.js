const UserService = require("../services/UserService");

module.exports = {
    async list(req, res){
        return res.json(await UserService.list());
    },

    async getById(req, res){
        return res.json(await UserService.getById(req.params));
    },

    async put(req, res){
        const change = await UserService.put(req.body);

        if(change != true){
            return response.status(404).json({error: 'error'});
        }

        return response.status(200).send()
    },

    async post(req, res){       
        return res.json(await UserService.post(req.body));
    },

    async delete(req, res){
        const data = await UserService.delete(req.params);

        if(!data){
            res.json({error:"Register doesn't exist"});
        }
        
        return res.status(200).send();
    }
}
