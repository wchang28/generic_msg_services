var fs = require('fs');
var stompConnector = require('stomp_msg_connector');

// argv[2] is config file
if (process.argv.length < 3) {
	console.error('config file is not optional');
	process.exit(1);
}

var config = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
//console.log(JSON.stringify(config));

// initialize the connector
var p = stompConnector.initialize(config);
p.on('broker_connected', function (event) {
	console.log(event.broker_name + ': connected to the msg broker ' + event.broker_url);
}).on('ready', function () {
	console.log('messaging service is READY');
});