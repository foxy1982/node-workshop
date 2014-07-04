'use strict';

var Promise = require('promise');
var fs = require('fs');

function readJSON(filename) {
	return readFile(filename).then(parseJSON);
}

function parseJSON(data) {
	return new Promise(function(resolve, reject) {
		resolve(JSON.parse(data));
	});
}

function readFile(filename) {
	return new Promise(function(resolve, reject) {
		fs.readFile(filename, function (error, data) {
			if (error) {
				return reject(error);
			}
			resolve(data);
		});
	});
}

readJSON('two').then(function(data) {
	console.log(data.user);
}).catch(function(error) { console.error(error); })