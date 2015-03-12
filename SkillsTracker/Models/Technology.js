var mongoose = require("mongoose");
var Project = require("./Project.js");
var Person = require("./Person.js");
var Schema   = mongoose.Schema;
 
var TechnologySchema = new Schema({
    name: String,
    url: String,
    projects: [Project.schema],
    people: [Person.schema]
});
module.exports = mongoose.model('Technology', TechnologySchema);