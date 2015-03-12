var mongoose = require('mongoose'),
    Person = require('../Models/Person'),
    Client = require('../Models/Client'),
    Project = require('../Models/Project'),
    Technology = require('../Models/Technology'),
    ObjectId = mongoose.Types.ObjectId

exports.createDummyPerson = function (req, res, next) {
    var dummy = new Person();

    dummy.firstName = "John";
    dummy.lastName = "Smith";
    dummy.title = "Dummy";
    dummy.office = "Toronto";

    var firstProject = new Project();
    firstProject.name = "commoncore";
    firstProject.summary = "digital textbook stuff";
    firstProject.startDate = "1/1/2015";
    firstProject.endDate = "9/9/2015";

    var secondProject = new Project();
    secondProject.name = "staff aug";
    secondProject.summary = "business as usual";
    secondProject.startDate = "2/2/2011";
    secondProject.endDate = "10/10/2019";

    var firstTechnology = {
            id: { id: "firstTestID" },
            projects: [firstProject, secondProject],
            isPreferred: true
        };

    var secondTechnology = {
            id: { id: "secondTestID" },
            projects: [firstProject, secondProject],
            isPreferred: false
        };

    dummy.projects.push(firstProject);
    dummy.projects.push(secondProject);
    dummy.technologies.push(firstTechnology);
    dummy.technologies.push(secondTechnology);    

    dummy.save(function(err, person) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            res.json({
                type: true,
                data: person
            })
        }        
    });
};

exports.createPerson = function(req, res, next) {
    var personModel = new Person(req.body);
    personModel.save(function(err, person) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            res.json({
                type: true,
                data: person
            })
        }
    })
}
 
exports.viewPerson = function(req, res, next) {
    Person.findById(new ObjectId(req.params.id), function(err, person) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            if (person) {
                res.json({
                    type: true,
                    data: person
                })
            } else {
                res.json({
                    type: false,
                    data: "Person: " + req.params.id + " not found"
                })
            }
        }
    })
}
  
exports.updatePerson = function(req, res, next) {
    var updatedPersonModel = new Person(req.body);
    Person.findByIdAndUpdate(new ObjectId(req.params.id), updatedPersonModel, function(err, person) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            if (person) {
                res.json({
                    type: true,
                    data: person
                })
            } else {
                res.json({
                    type: false,
                    data: "Person: " + req.params.id + " not found"
                })
            }
        }
    })
}
 
exports.deletePerson = function(req, res, next) {
    Person.findByIdAndRemove(new Object(req.params.id), function(err, person) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            res.json({
                type: true,
                data: "Person: " + req.params.id + " deleted successfully"
            })
        }
    })
}