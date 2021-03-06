
// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
// Port
var PORT = process.env.PORT || 8080;

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// Listener
app.listen(PORT, function(){
	console.log("Listening on Port :" +PORT);
});