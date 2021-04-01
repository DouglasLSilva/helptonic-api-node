const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

var apiPort = process.env.PORT || 3333;
var ambiente = process.env.NODE_ENV || 'development';

app.use(express.urlencoded());
app.use(express.json());
app.use(routes);

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');


if (ambiente === 'development'){
    app.use(cors());
}

var serverAPI = app.listen(apiPort, function () {
  console.log('Server API listening at http://' + serverAPI.address().address + ':' + serverAPI.address().port);
});

function verifyJWT(req, res, next){
  const token = req.headers['x-access-token'];
  if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, process.env.SECRET, function(err, decoded) {
    if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
    
    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;
    next();
  });
}   

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
