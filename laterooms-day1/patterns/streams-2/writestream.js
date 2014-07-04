'use strict';

var fs = require('fs');

var outputFile = __dirname + '\\' + process.argv[2];
console.log(outputFile);

var writeStream = fs.createWriteStream(outputFile);

process.stdin.pipe(writeStream);

/*
var readStream = fs.createReadStream(__dirname + '/data/alpha');

var writeStream = fs.createWriteStream(__dirname + '/data/alpha2');

readStream.pipe(writeStream);
*/