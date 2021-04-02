const Photo = require("../models/Photo");
const User = require("../models/User");
const UserService = require("./UserService");


module.exports = {

    async getById(params){
        var userId = params['userId'];
        var photoId = params['photoId'];

        if(userId == undefined||userId.trim()==''){
            return {message: 'user id undefined',error:true};
        }
        else if(photoId == undefined||userId.trim()==''){
            return {message: 'photo id undefined', error:true}
        }

        const response = await User.findOne({_id: userId}).select({photo:{$elemMatch: {_id: photoId}}})

        if(response == null){
            return {message: 'photo not found', error:true}
        }

        return {response : response, error:false};
    },

    async post(params) {   

        var userId = params['userId'];
        var photoParams = params['photo'];
        const verifyUser = await UserService.getById(userId);
       
        if(userId == undefined){
            return {message: 'user id undefined', error:true};
        }

        const responseData = await User.updateOne({
            _id: userId
            },
            { 
                $push: {photo: photoParams}
            }
        );

        return {response : responseData, error:false};   
    },


    async delete(params) {
        var userId = params['userId'];
        var photoId = params['photoId'];

        if(userId == undefined){
            return {message: 'user id undefined',error:true};
        }
        if(photoId == undefined){
            return {message: 'photo id undefined', error:true};
        }

        const resp = await User.updateMany({_id: userId},{ $pull: { photo : { _id: [photoId]}}});

        return {error:false};     
    },
}