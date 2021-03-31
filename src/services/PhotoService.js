const Photo = require("../models/Photo");
const User = require("../models/User");


module.exports = {

    async getById(params){
        var userId = params['userId'];
        var photoId = params['photoId'];

        if(userId == undefined){
            return {error: 'user id undefined'};
        }
        else if(photoId == undefined){
            return {error: 'photo id undefined'}
        }
        //{"_id": id},{awards: {$elemMatch: {award:'Turing Award', year:1977}}}
        return await User.find({_id: userId},{photo:{$elemMatch:{_id: photoId}}} );
    },

    async post(params) {        
        var userId = params['userId'];
        var photoParams = params['photo'];

        if(userId == undefined){
            return {error: 'user id undefined'};
        }

        return await User.findOneAndUpdate({_id: userId},{ $push: {photo: photoParams}});   
    },


    async delete(params) {
        var userId = params['userId'];
        var photoId = params['photoId'];

        if(userId == undefined){
            return {error: 'user id undefined'};
        }
        if(photoId == undefined){
            return {error: 'photo id undefined'};
        }

        return await User.findOneAndUpdate({_id: userId},{ $pull: {photo: {_id: photoId}}});     
    },
}