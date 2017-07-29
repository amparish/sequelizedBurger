var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// CODE GOES HERE

router.get("/", function(req, res){
	burger.selectAll(function(data){
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/", function(req, res){
	burger.insertOne([
		"burger_name", "devoured"]
	);
});

router.put("/", function(req, res){
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	burger.updateOne({
		burger_name: req.body.burger_name
	}, condition, function(){
		res.redirect("/");
	});
});

module.exports = router;