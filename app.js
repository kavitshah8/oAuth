// Uses express 4.0

var express = require('express');
var app = express();


//Middle wares
app.use(function(req,res,next){
	console.log("Hello");
	next();
} );

app.use(function(req,res,next){
	res.send("Hi there!!!");
	next();
} );

app.get('/',function(req,res){
	console.log('Hello Wrold');
} );

app.listen(3000);