const mongoose = require("mongoose");
const PhotoModel = require("./Photo");

const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
    email: String,
    password: String,
    name: String,
    typeColorBlindess: String,
    photo: [PhotoModel]
});

module.exports = mongoose.model('User', UserModelSchema)
