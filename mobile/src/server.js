var express = require('express');
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var cors = require('cors');
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
require('typescript-require');
var app = express();
var traitify = require('traitify');
var config = require("./secrets.ts");
traitify.setHost(config.default.traitify.name);
traitify.setVersion("v1");
traitify.setSecretKey(config.default.traitify.secret);

app.use(bodyParser.urlencoded({ 'extended': 'true' }));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static(__dirname));

// Get assessment
app.get('/api/assessment', function (req, res) {
    console.log("fetching assessment");
    traitify.createAssessment(deckId, function (assessment) {
        // Use assessment here.
        console.log(assessment);
        res.json(assessment);
    });
});

app.listen(process.env.PORT || 5009);
