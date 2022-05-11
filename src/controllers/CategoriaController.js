const CategoriaService = require("../services/CategoriaService");

module.exports = {
    async list(req, res){
        try{
            return res.json(await CategoriaService.list());
        }catch(error){
            console.log(error)
        }
    },

    async getById(req, res){
        try{
            return res.json(await CategoriaService.getById(req.params));
        }catch(error){
            console.log(error)
        }
    },

    async put(req, res){
        try{
            const change = await CategoriaService.put(req.body);

            if(change != true){
                return res.status(404).json({error: 'error'});
            }
    
            return res.status(200).send();
        }catch(error){
            console.log(error)
        }
    },

    async post(req, res){       
        try{
            return res.json(await CategoriaService.post(req.body));
        }catch(error){
            console.log(error)
        }
    },

    async delete(req, res){
        try{
            const data = await CategoriaService.delete(req.params);

            if(!data){
                res.json({error:"Register doesn't exist"});
            }
            
            return res.status(200).send();
        }catch(error){
            console.log(error)
        }
    }
}
