var express = require('express');
var bodyParser= require('body-parser');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var PORT = '8080';
var db = null;
var db_user = {
	name: "", // username
	pass: ""  // password
};

app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect('mongodb://'+db_user.name+':'+db_user.pass+'@ds013916.mlab.com:13916/mongodb-and-angular', function(err, database) {
	if (err) { 
		return console.log(err);
	}
	
	db = database;
	
	app.listen(PORT, function() {
		console.log('Server istening on port: '+PORT+'\nDatabase connection is ready.');
	});
});

//////////////////////////////////////////
//  ACTION HANDLERS
//////////////////////////////////////////
function common_ActionHandler(req, res) {
	db.collection('quotes').find().toArray(function(err, results) {
		console.log(results);
	});
	
	res.sendFile(__dirname + '/view/index.html');
}

function quotes_ActionHandler(req, res) {
	db.collection('quotes').save(req.body, function(err, result) {
		if (err) {
			return console.log(err);
		}
		
		console.log('Record saved to database.');
		res.redirect('/');
	});
}

//////////////////////////////////////////
//  ACTION MAPPING
//////////////////////////////////////////
var actions = [
	{
		method: "GET",
		endpoint: "/",
		action: common_ActionHandler
	},
	{
		method: "POST",
		endpoint: "/quotes",
		action: quotes_ActionHandler
	}
];


// Creating action from map.
(function() {
	actions.forEach(function(action) {
		switch(action.method) {
		    case "GET":
		        app.get(action.endpoint, action.action);
		        break;
		    case "POST":
		    	app.post(action.endpoint, action.action);
		    	break;
		}
	});
})();
