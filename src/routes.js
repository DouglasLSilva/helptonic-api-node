const express = require('express');
const routes = express.Router();
const { verifyJWT } = require('./Util/Jwt');

const UsersController = require('./controllers/UsersController');
const LoginController = require('./controllers/LoginController');
const PhotoController = require('./controllers/PhotoController');
const S3Controller = require('./controllers/S3Controller');


routes.post('/user', UsersController.register);

routes.post('/login', LoginController.login);

routes.get('/photo',verifyJWT, PhotoController.getById);
routes.post('/photo',verifyJWT, PhotoController.post);
routes.delete('/photo',verifyJWT, PhotoController.delete);

routes.post('/s3', S3Controller.getUrl);

module.exports = routes;