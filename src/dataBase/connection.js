const mongoose = require('mongoose');
const uri = "mongodb+srv://heltonic:daltonico123@helptonicdb.c5uyv.mongodb.net/HelptonicDataBase?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;