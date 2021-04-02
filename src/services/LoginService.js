const UserService = require("../services/UserService");
const cript = require("../Util/Crypt");

module.exports = {
    async Login(params){
        const {email, password} = params;
        const user = await UserService.getByEmail(email);

        if(user == undefined)
            return null;

        const passHash = cript.crypt(password);

        if(user['password'] != passHash)
            return null;
        
        user['password'] = "";

        return user;
    },       
}