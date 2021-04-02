const express = require('express');
const routes = express.Router();
const { verifyJWT } = require('./Util/Jwt');

const UsersController = require('./controllers/UsersController');
const LoginController = require('./controllers/LoginController');
const PhotoController = require('./controllers/PhotoController');

routes.post('/user', UsersController.register);

routes.post('/login', LoginController.login);

routes.get('/photo',verifyJWT, PhotoController.getById);
routes.post('/photo',verifyJWT, PhotoController.post);
routes.delete('/photo',verifyJWT, PhotoController.delete);

module.exports = routes;