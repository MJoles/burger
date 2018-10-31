var express = require("express");
var methodOverride = require('method-override');
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();
app.use(express.static(__dirname + '/public'));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setting up handlebars
app.use(methodOverride('_method'));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Creating a new routes variable that requires the burgers_controller.js routing file
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// Setting the port of the application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;
app.listen(PORT);
