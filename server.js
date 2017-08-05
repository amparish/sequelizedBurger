var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

//Enable Express app
var app = express();
var PORT = process.env.PORT || 3000;

var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use("/", express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

//require("./app/routing/apiRoutes")(app);
//require("./app/routing/htmlRoutes")(app);

//require('./controllers/burgers_controller.js')(app)

db.sequelize.sync({force: true}).then(function(){
	app.listen(PORT, function(){
		console.log("App listening on PORT " + PORT);
	});
});