const crypto = require('crypto');
const secret = 's14i27d35l05';

module.exports = {
    crypt(params){
        const hash = crypto
        .createHash('sha256', secret)
        .update(params)
        .digest('hex');

        return hash
    },
}