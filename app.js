var express = require('express');

var app = express();

app.get('/', function(req,res){
	console.log("serving...");
	res.send("Hi Bitch 2.0");
});

app.listen(8080, function(){
	console.log("Done..");
});