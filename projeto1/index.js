var http = require('http');
var handle = require('./handle');

var events = require('events');
var emiter = new events.EventEmitter();

emiter.on('say-exec', say);

function say(){
	console.log('Im saying...');
}

emiter.emit('say-exec');

var server = http.createServer(handle);
server.listen(3000,function(){
	console.log('Server is listening at port 3000');

});
