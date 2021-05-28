const mongoose = require('mongoose');
const uri = process.env.DB_URL;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;