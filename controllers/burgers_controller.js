var db = require("../models");
var express = require('express');
var app = express.Router();

	app.get("/", function(req, res){
		db.burger.findAll({}).then(function(data){
			var hbsObject = {burger: data};
			console.log(hbsObject);
			res.render("index", data);
		});
	});

	app.post("/", function(req, res){
		console.log(req.body);
		db.burger.create({
			burger_name: req.body.name,
			devoured: false
		}).then(function(data){
			console.log(data)
			res.redirect("/");
		});
	});

	app.put("/:id", function(req, res){
		console.log(req.body.id);

		db.burger.update({
			devoured: true
		}, {
			where: {
				id: req.body.id
			}
		}).then(function(data){
			console.log(data);
			res.redirect("/");
		});
	});

	module.exports = app;
	