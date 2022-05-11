const ProdutoService = require("../services/ProdutoService");

module.exports = {
    async list(req, res){
        try{
            return res.json(await ProdutoService.list());
        }catch(error){
            console.log(error)
        }
    },

    async getById(req, res){
        try{
            return res.json(await ProdutoService.getById(req.params));
        }catch(error){
            console.log(error)
        }
    },

    async put(req, res){
        try{
            const change = await ProdutoService.put(req.body);

            if(change != true){
                return res.status(404).json({error: 'error'});
            }

            return res.status(200).send()

        }catch(error){
            console.log(error)
        }
    },

    async post(req, res){       
        try{
            return res.json(await ProdutoService.post(req.body));
        }catch(error){
            console.log(error)
        }
    },

    async delete(req, res){
        try{
            const data = await ProdutoService.delete(req.params);

            if(!data){
                res.json({error:"Register doesn't exist"});
            }
            
            return res.status(200).send();
        }catch(error){
            console.log(error)
        }
    }
}
