var express = require('express');

var app = express();

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

function redirectSec(req, res, next) {
	if (req.headers['x-forwarded-proto'] == 'http') {
		res.redirect('https://' + req.headers.host + req.path);
	} else {
		return next();
	}
}
app.all('/', redirectSec);

app.get('/', function(req,res){
	console.log("serving...");
	res.send("Hi Bitch 2.0");
});

app.listen(server_port, server_ip_address, function(){
	console.log("Done..");
	console.log( "Listening on " + server_ip_address + ", port " + server_port );
});