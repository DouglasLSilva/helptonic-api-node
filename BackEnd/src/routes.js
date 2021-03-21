const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/usersController');

routes.get('/user', UserController.list);
routes.post('/user', UserController.post);
routes.delete('/user', UserController.delete);
routes.put('/user', UserController.put);


module.exports = routes;