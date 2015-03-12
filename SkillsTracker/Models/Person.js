var mongoose = require("mongoose");
var Project = require("./Project.js");
var Schema   = mongoose.Schema;
 
var PersonSchema = new Schema({
    firstName: String,
    lastName: String,
    manager: String,
    office: String,
    department: String,
    title: String,
    bio: String,
    pictureURL: String,
    projects: [Project.schema],
    technologies: [{
        id: Schema.Types.ObjectId,
        projects: [Project.schema],
        isPreferred: Boolean // Indicates that the person would prefer to use this technology
    }]
});
module.exports = mongoose.model('Person', PersonSchema);