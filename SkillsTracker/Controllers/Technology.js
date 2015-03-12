var mongoose = require('mongoose'),
    Technology = require('../Models/Technology'),
    Project = require('../Models/Project'),
    Person = require('../Models/Person'),
    ObjectId = mongoose.Types.ObjectId

exports.createDummyTechnology = function (req, res, next) {
    var dummy = new Technology();
    dummy.name = "javascript";
    dummy.url = "javascript.com";

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

    dummy.projects.push(firstProject);
    dummy.projects.push(secondProject);

    dummy.people.push(firstPerson);
    dummy.people.push(secondPerson);

    dummy.save(function(err, technology) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            res.json({
                type: true,
                data: technology
            })
        }        
    });
};

exports.createTechnology = function(req, res, next) {
    var technologyModel = new Technology(req.body);
    technologyModel.save(function(err, technology) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            res.json({
                type: true,
                data: technology
            })
        }
    })
}
 
exports.viewTechnology = function(req, res, next) {
    Technology.findById(new ObjectId(req.params.id), function(err, technology) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            if (technology) {
                res.json({
                    type: true,
                    data: technology
                })
            } else {
                res.json({
                    type: false,
                    data: "Technology: " + req.params.id + " not found"
                })
            }
        }
    })
}
  
exports.updateTechnology = function(req, res, next) {
    var updatedTechnologyModel = new Technology(req.body);
    Technology.findByIdAndUpdate(new ObjectId(req.params.id), updatedTechnologyModel, function(err, technology) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            if (technology) {
                res.json({
                    type: true,
                    data: technology
                })
            } else {
                res.json({
                    type: false,
                    data: "Technology: " + req.params.id + " not found"
                })
            }
        }
    })
}
 
exports.deleteTechnology = function(req, res, next) {
    Technology.findByIdAndRemove(new Object(req.params.id), function(err, technology) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            res.json({
                type: true,
                data: "Technology: " + req.params.id + " deleted successfully"
            })
        }
    })
}