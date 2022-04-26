const mongoose = require('mongoose');
const uri = "mongodb+srv://estoque:estoque123@estoquen1.og9ah.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;