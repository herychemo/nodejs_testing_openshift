var express = require('express');

var app = express();

app.get('/', function(req,res){
	console.log("serving...");
	res.send("Hi Bitch");
});

app.listen(8080, function(){
	console.log("Done..");
});