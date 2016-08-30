var express = require('express');
var ipGetter = require('./getIP');
var PORT = 3000;
	
var app = express();
app.get('/', function (req, res) {
	  var ip = ipGetter.getServerIp();
	  res.send('Hello, world! My IP = ' + ip + "\n");
});
	
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);