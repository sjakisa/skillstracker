var mongoose = require('mongoose'); 
mongoose.connect('mongodb://admin:admin@ds060977.mongolab.com:60977/skillstracker');

var db = mongoose.connection;

db.once('open', function (callback) { console.log('connected') });