const UserService = require("../services/UserService");
const cript = require("../Util/Crypt");

module.exports = {
    async Login(params){
        const {email, password} = params;

        const user = await UserService.getByEmail(email);
        const passHash = cript.crypt(password);

        if(user[0]['password'] != passHash)
            return false;

        return true;
    },
}