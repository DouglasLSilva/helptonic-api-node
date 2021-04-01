const crypto = require('crypto');
require("dotenv-safe").config();

module.exports = {
    crypt(params){
        const hash = crypto
        .createHash('sha256', process.env.PASSWORD)
        .update(params)
        .digest('hex');

        return hash
    },
}