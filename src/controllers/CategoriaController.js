const CategoriaService = require("../services/CategoriaService");

module.exports = {
    async list(req, res){
        return res.json(await CategoriaService.list());
    },

    async getById(req, res){
        return res.json(await CategoriaService.getById(req.params));
    },

    async put(req, res){
        const change = await CategoriaService.put(req.body);

        if(change != true){
            return res.status(404).json({error: 'error'});
        }

        return res.status(200).send();
    },

    async post(req, res){       
        return res.json(await CategoriaService.post(req.body));
    },

    async delete(req, res){
        const data = await CategoriaService.delete(req.params);

        if(!data){
            res.json({error:"Register doesn't exist"});
        }
        
        return res.status(200).send();
    }
}
