const Photo = require("../models/Photo");
const User = require("../models/User");


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

        const response = await User.findOne({_id: userId},{photo:{$elemMatch:{_id: photoId}}});

        if(response == null){
            return {message: 'photo not found', error:true}
        }

        //{"_id": id},{awards: {$elemMatch: {award:'Turing Award', year:1977}}}
        return {response : response, error:false};
    },

    async post(params) {        
        var userId = params['userId'];
        var photoParams = params['photo'];

        if(userId == undefined){
            return {message: 'user id undefined', error:true};
        }

        return {response : await User.findOneAndUpdate({_id: userId},{ $push: {photo: photoParams}}), error:false};   
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

        return {response : await User.findOneAndUpdate({_id: userId},{ $pull: {photo: {_id: photoId}}}), error:false};     
    },
}