const ProdutoService = require("../services/ProdutoService");

module.exports = {
    async list(req, res){
        return res.json(await ProdutoService.list());
    },

    async getById(req, res){
        return res.json(await ProdutoService.getById(req.params));
    },

    async put(req, res){
        const change = await ProdutoService.put(req.body);

        if(change != true){
            return res.status(404).json({error: 'error'});
        }

        return res.status(200).send()
    },

    async post(req, res){       
        return res.json(await ProdutoService.post(req.body));
    },

    async delete(req, res){
        const data = await ProdutoService.delete(req.params);

        if(!data){
            res.json({error:"Register doesn't exist"});
        }
        
        return res.status(200).send();
    }
}
