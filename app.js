var express=require('express'),
	bodyParser = require('body-parser'),
	route = require('./routes/index.js'),
	Handlebars = require('handlebars');

Handlebars.registerHelper('inc', function(value, options){
	return parseInt(value) + 1;
});

var app=express();

app.use('/',route);
app.use(express.static(__dirname+"/public"))
app.use(bodyParser.urlencoded({
	extended:true
}));
app.use(bodyParser.json());
app.post('/result',function(req,res){
	var template = Handlebars.compile(req.body.xml),
		jsonData = JSON.parse(req.body.json);

	res.end(template(jsonData));
});

app.listen(8080,function(){console.log("Listening to Port 8080.")});

