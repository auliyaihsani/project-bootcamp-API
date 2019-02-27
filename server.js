var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    morgan = require('morgan');
var logger = require("./util/logging/winston-logger");

/** start app **/
app.listen(port);
logger.debug(' RESTful API server started on: ' + port);

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// cors
// var cors = require('cors');
// app.use(app.cors());

app.use(function (req, res, next) {
    res.header("accses-control-allow-origin", "*");
    res.header("accses-control-alowed-headers", "origin, X-requested-with, content-Type, accept");
    next();
})

// use morgan
app.use(morgan('combined', {
    "stream": logger.stream
}));
logger.debug("Overriding 'Express' logger");


// route
var bootcamp_batchRoute = require('./routes/routes-bootcamp_batch');
bootcamp_batchRoute(app);

var study_materialRoute = require('./routes/routes-study_material');
study_materialRoute(app);

var trainerRoute = require('./routes/routes-trainer');
trainerRoute(app);

var studyperiodRoute = require('./routes/routes-study_period');
studyperiodRoute(app);



