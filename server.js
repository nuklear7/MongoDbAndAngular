var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var PORT = '8080';
var db = null;
var db_user = {
	name: "dummyUser",
	pass: "Password123"
};

// Setting up configurations.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

app.use('/scripts', express.static(__dirname + '/view/scripts'));

//////////////////////////////////////////
//  OBJECT MODEL
//////////////////////////////////////////
var Quote = mongoose.model('Quote', {
    name : String,
    quote : String
});

// Connecting to database and staring web-server.
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
	res.sendFile(__dirname + '/view/index.html');
}

function get_quotes_ActionHandler(req, res) {
	db.collection('quotes').find().toArray(function(err, results) {
		res.json(results);
	});
}

function post_quotes_ActionHandler(req, res) {
	db.collection('quotes').save(req.body, function(err, result) {
		if (err) {
			return console.log(err);
		}
		
		console.log('Record saved to database.');
	});
	
	db.collection('quotes').find().toArray(function(err, results) {
		res.json(results);
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
		method: "GET",
		endpoint: "/api/quotes",
		action: get_quotes_ActionHandler
	},
	{
		method: "POST",
		endpoint: "/api/quotes",
		action: post_quotes_ActionHandler
	}
];


// (self-invoking function) Creating action from map.
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
