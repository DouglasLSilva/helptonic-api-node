const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhotoModel = new Schema({
    imageUrl: String,
    data: Date
});

module.exports = PhotoModel;