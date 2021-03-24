const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhotoModel = new Schema({
    base64Photo: String,
    data: Date
});

module.exports = PhotoModel;