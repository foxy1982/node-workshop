var fs = require('fs');
var chunkCount = 0;

var stream = fs.createReadStream(__dirname + '/intro.pdf', {bufferSize: 1});
stream.on('data', function(data) {
	console.log(data.toString());
	chunkCount++;
});


/*
fs.readFile(__dirname + '/README.md', function (err, file) {
  console.log(file);
});

*/
