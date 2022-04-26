const express = require('express');
const routes = express.Router();

const CategoriaController = require('./controllers/CategoriaController');
const ProdutoController = require('./controllers/ProdutoController');

routes.get('/categoria', CategoriaController.list);
routes.get('/categoria/:id', CategoriaController.getById);
routes.post('/categoria', CategoriaController.post);
routes.put('/categoria', CategoriaController.put);
routes.delete('/categoria/:id', CategoriaController.delete);

routes.get('/produto', ProdutoController.list);
routes.get('/produto/:id', ProdutoController.getById);
routes.post('/produto', ProdutoController.post);
routes.put('/produto', ProdutoController.put);
routes.delete('/produto/:id', ProdutoController.delete);

module.exports = routes;