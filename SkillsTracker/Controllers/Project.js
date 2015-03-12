var mongoose = require('mongoose'),
    Project = require('../Models/Project'),
    Technology = require('../Models/Technology'),
    Client = require('../Models/Client'),
    Person = require('../Models/Person'),
    ObjectId = mongoose.Types.ObjectId

exports.createDummyProject = function (req, res, next) {
    var dummy = new Project();
    dummy.name = "commoncore";
    dummy.summary = "digital textbook stuff";
    dummy.startDate = "1/1/2015";
    dummy.endDate = "9/9/2015";

    var firstTechnology = new Technology();
    dummy.name = "javascript";
    dummy.url = "javascript.com";

    var secondTechnology = new Technology();
    secondTechnology.name = "html";
    secondTechnology.url = "html.com";

    var firstPerson = new Person();
    firstPerson.firstName = "John";
    firstPerson.lastName = "Smith";
    firstPerson.title = "Dummy";
    firstPerson.office = "Toronto";

    var secondPerson = new Person();
    secondPerson.firstName = "Jane";
    secondPerson.lastName = "Doe";
    secondPerson.title = "Consultant";
    secondPerson.office = "New York";

    var client = new Client();
    client.name = "pearson";
    client.url = "pearson.com";
    client.bio = "big education company";

    dummy.people.push(firstPerson);
    dummy.people.push(secondPerson);
    dummy.technologies.push(firstTechnology);
    dummy.technologies.push(secondTechnology);
    dummy.client = client;
    

    dummy.save(function(err, project) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            res.json({
                type: true,
                data: project
            })
        }        
    });
};

exports.createProject = function(req, res, next) {
    var projectModel = new Project(req.body);
    projectModel.save(function(err, project) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            res.json({
                type: true,
                data: project
            })
        }
    })
}
 
exports.viewProject = function(req, res, next) {
    Project.findById(new ObjectId(req.params.id), function(err, project) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            if (project) {
                res.json({
                    type: true,
                    data: project
                })
            } else {
                res.json({
                    type: false,
                    data: "Project: " + req.params.id + " not found"
                })
            }
        }
    })
}
  
exports.updateProject = function(req, res, next) {
    var updatedProjectModel = new Project(req.body);
    Project.findByIdAndUpdate(new ObjectId(req.params.id), updatedProjectModel, function(err, project) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            if (project) {
                res.json({
                    type: true,
                    data: project
                })
            } else {
                res.json({
                    type: false,
                    data: "Project: " + req.params.id + " not found"
                })
            }
        }
    })
}
 
exports.deleteProject = function(req, res, next) {
    Project.findByIdAndRemove(new Object(req.params.id), function(err, project) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            res.json({
                type: true,
                data: "Project: " + req.params.id + " deleted successfully"
            })
        }
    })
}