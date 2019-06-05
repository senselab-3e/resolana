

/*
var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;
*/

var express = require ('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


var server = app.listen(port);


app.use(express.static(__dirname + '/public'));

console.log("sPlaSh");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
	//console.log('new connection');
	console.log('new connection:  ' + socket.id );
	socket.on('mouse', mouseMsg);

	function mouseMsg(data) {
		socket.broadcast.emit('mouse', data);
		//io.sockets.emit('mouse', data);
		//console.log(data);
	}
}
