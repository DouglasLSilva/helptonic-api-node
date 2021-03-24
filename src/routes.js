const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UsersController');

routes.get('/user', UserController.list);
routes.get('/user/:id', UserController.getById);
routes.post('/user', UserController.post);
routes.delete('/user/:id', UserController.delete);
routes.put('/user', UserController.put);

const LoginController = require('./controllers/LoginController');
routes.post('/login', LoginController.login);

module.exports = routes;