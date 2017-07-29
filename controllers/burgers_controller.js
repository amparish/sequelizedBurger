var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

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
	console.log(req.body);
	burger.insertOne([
		"burger_name", "devoured"],
		req.body.name, function(){
			res.redirect("/");
		}
	);
});

router.put("/:id", function(req, res){
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	burger.updateOne({
		devoured: true
	}, condition, function(){
		res.redirect("/");
	});
});

module.exports = router;