const express = require('express');
const UserController = require('./controllers/UsersController');
// const UserController = require("./controllers/UsersController");

const routes = express.Router();

routes.get('/user', UserController.List);


module.exports = routes;