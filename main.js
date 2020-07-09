var express = require("express");
var main = express();

// Telling express to use public directory

main.use(express.static(__dirname + "/public"));

main.set("view engine", "ejs");

// ===== Routes =====

main.get("/", function(req, res){
	res.render("landing");
});

main.get("/home", function(req, res){
	res.render("home")
});

main.get("/services", function(req, res){
	res.render("services"); 
});

main.get("/valueAddedSolutions", function(req, res){
	res.render("valueAddedSolutions"); 
});

main.get("/tracking", function(req, res){
	res.render("tracking"); 
});

main.get("/contact", function(req, res){
	res.render("contact"); 
});

main.get("*", function(req,res){
	res.send("ERROR! This route does not exist");
});

main.listen(process.env.PORT || 3000, process.env.IP, function(req,res){
	console.log("Server is running");
});