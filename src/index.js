const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

var apiPort = process.env.PORT || 3000;
var ambiente = process.env.NODE_ENV || 'development';


app.use(express.urlencoded());
app.use(cors());
app.use(express.json());
app.use(routes);

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');


//if (ambiente === 'development'){
//    app.use(cors());
//}

var serverAPI = app.listen(apiPort, function () {
  console.log('Server API listening at http://' + serverAPI.address().address + ':' + serverAPI.address().port);
});


app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
