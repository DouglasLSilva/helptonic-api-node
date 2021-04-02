const jwt = require('jsonwebtoken');
const secret = process.env.secretJWTToken;

module.exports={
    verifyJWT(req, res, next){
        const token = req.headers['x-access-token'];
        if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
        
        jwt.verify(token, secret, function(err, decoded) {
          if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
          
          // se tudo estiver ok, salva no request para uso posterior
          req.userId = decoded.id;
          next();
        });
    } ,
    
    async createJwt(id){
        const jwtHash = jwt.sign({ id }, secret, {
            expiresIn: 10800 // expires in 3 hours
        });

        return jwtHash;
    }
}