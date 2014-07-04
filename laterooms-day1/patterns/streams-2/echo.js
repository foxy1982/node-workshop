'use strict';

var fs = require('fs');

var readStream;

if (process.stdin.isTTY) {
	console.log("isTTY");
	readStream = fs.createReadStream(process.argv[2]);
}
else {
	console.log("is NOT TTY");
	readStream = process.stdin;
}

readStream.pipe(process.stdout);
