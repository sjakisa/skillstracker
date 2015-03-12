var mongoose = require("mongoose");
var Client = require("./Client.js");
var Person = require("./Person.js");
var Technology= require("./Technology.js");
var Schema   = mongoose.Schema;
 
var ProjectSchema = new Schema({
    name: String,
    client: { type: Schema.Types.ObjectId, ref: 'Client' },
    startdate: String,
    enddate: String,
    summary: String,
    people: [Person.schema],
    technologies: [Technology.schema]
});
module.exports = mongoose.model('Project', ProjectSchema);