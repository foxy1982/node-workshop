var fs = require('fs');

var sizeAccum = 0;

function processFile(err, stats) {
	if (!err) {
		if (stats.isFile())	{
			sizeAccum += stats.size;
			console.log(sizeAccum);
		}
	}
	else {
		console.log(err);
	}
}

function processDirectory(err, list) {
	if (!err) {
		for (var i = 0; i < list.length; i++) {
			fs.stat(process.argv[2] + list[i], processFile);
		}	
	}
	else {
		console.log(err);
	}
}

fs.readdir(process.argv[2], processDirectory);