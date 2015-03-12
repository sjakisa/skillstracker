var mongoose = require("mongoose");
var Project = require("./Project.js");
var Schema   = mongoose.Schema;
 
var ClientSchema = new Schema({
    name: String,
    url: String,
    bio: String,
    projects: [Project.schema]
});
module.exports = mongoose.model('Client', ClientSchema);