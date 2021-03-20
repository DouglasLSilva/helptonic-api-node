const { response } = require("express");
const connection = require("../dataBase/connection");

const userService = require("../services/UserService")

function List(req, res) {
    const teste = {
        nome: "luis", 
        idade: 123
    }

        return res.json(teste)
    }

function Delete(params) {
        
}

module.exports={
    List,
    Delete
}