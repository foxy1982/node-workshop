'use strict';

var fs = require('fs');

var writeStream = fs.createWriteStream(__dirname + '/stdin');

process.stdin.pipe(writeStream);


/*
var readStream = fs.createReadStream(__dirname + '/data/alpha');

var writeStream = fs.createWriteStream(__dirname + '/data/alpha2');

readStream.pipe(writeStream);
*/