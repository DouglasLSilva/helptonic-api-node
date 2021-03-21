const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/usersController');

routes.get('/user', UserController.list);
routes.post('/user', UserController.post);

module.exports = routes;