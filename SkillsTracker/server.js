var restify = require('restify'),
    fs = require('fs'),
    db = require('./DB'),
    controllers = require('./Controllers'),
    server = restify.createServer();
 
server.use(restify.fullResponse());
server.use(restify.bodyParser());

 server.get("/", function(req, res, next) {
    res.send("Hello world!");
});

server.get('/person/dummy', controllers.person.createDummyPerson);
server.get("/person/:id", controllers.person.viewPerson);
server.post("/person", controllers.person.createPerson);
server.put("/person/:id", controllers.person.updatePerson);
server.del("/person/:id", controllers.person.deletePerson);

server.get('/client/dummy', controllers.client.createDummyClient);
server.get("/client/:id", controllers.client.viewClient);
server.post("/client", controllers.client.createClient);
server.put("/client/:id", controllers.client.updateClient);
server.del("/client/:id", controllers.client.deleteClient);

server.get('/technology/dummy', controllers.technology.createDummyTechnology);
server.get("/technology/:id", controllers.technology.viewTechnology);
server.post("/technology", controllers.technology.createTechnology);
server.put("/technology/:id", controllers.technology.updateTechnology);
server.del("/technology/:id", controllers.technology.deleteTechnology);

server.get('/project/dummy', controllers.project.createDummyProject);
server.get("/project/:id", controllers.project.viewProject);
server.post("/project", controllers.project.createProject);
server.put("/project/:id", controllers.project.updateProject);
server.del("/project/:id", controllers.project.deleteProject);

var port = process.env.PORT || 3000;

server.listen(port, function (err) {
    if (err)
        console.error(err)
    else
        console.log('App is ready at : ' + port)
})
 
if (process.env.environment == 'production')
    process.on('uncaughtException', function (err) {
        console.error(JSON.parse(JSON.stringify(err, ['stack', 'message', 'inner'], 2)))
    })