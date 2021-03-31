const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UsersController');
const LoginController = require('./controllers/LoginController');
const PhotoController = require('./controllers/PhotoController');

routes.get('/user', UserController.list);
routes.get('/user/:id', UserController.getById);
routes.post('/user', UserController.post);
routes.delete('/user/:id', UserController.delete);
routes.put('/user', UserController.put);

routes.post('/photo', PhotoController.post);
routes.delete('/photo', PhotoController.delete);
routes.get('/photo', PhotoController.getById);

routes.post('/login', LoginController.login);

module.exports = routes;