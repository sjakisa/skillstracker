var mongoose = require('mongoose'),
    Client = require('../Models/Client'),
    Project = require('../Models/Project'),
    Technology = require('../Models/Technology'),
    Person = require('../Models/Person'),
    ObjectId = mongoose.Types.ObjectId

exports.createDummyClient = function (req, res, next) {
    var dummy = new Client();

    dummy.name = "pearson";
    dummy.url = "pearson.com";
    dummy.bio = "big education company";

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
    dummy.save(function(err, client) {     
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            res.json({
                type: true,
                data: client
            })
        }  
    });

    /*dummy.projects.push(secondProject);
    dummy.save(function(err, client) {
            
    });*/
};

exports.createClient = function(req, res, next) {
    var clientModel = new Client(req.body);
    clientModel.save(function(err, client) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            res.json({
                type: true,
                data: client
            })
        }
    })
}
 
exports.viewClient = function(req, res, next) {
    Client.findById(new ObjectId(req.params.id), function(err, client) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            if (client) {
                res.json({
                    type: true,
                    data: client
                })
            } else {
                res.json({
                    type: false,
                    data: "Client: " + req.params.id + " not found"
                })
            }
        }
    })
}
  
exports.updateClient = function(req, res, next) {
    var updatedClientModel = new Client(req.body);
    Client.findByIdAndUpdate(new ObjectId(req.params.id), updatedClientModel, function(err, client) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            if (client) {
                res.json({
                    type: true,
                    data: client
                })
            } else {
                res.json({
                    type: false,
                    data: "Client: " + req.params.id + " not found"
                })
            }
        }
    })
}
 
exports.deleteClient = function(req, res, next) {
    Client.findByIdAndRemove(new Object(req.params.id), function(err, client) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            res.json({
                type: true,
                data: "Client: " + req.params.id + " deleted successfully"
            })
        }
    })
}