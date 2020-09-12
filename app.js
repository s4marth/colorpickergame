var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//routes
app.get("/", function(req, res){
	res.render("home");
});

app.get("/game", function(req, res){
	res.render("game");
});



app.listen(process.env.PORT, process.env.IP, function(){
	console.log("colorpicker server started");
});