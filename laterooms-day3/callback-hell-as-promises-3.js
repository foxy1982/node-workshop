'use strict';

var fs = require('fs');
//var rsvp = require('rsvp');
var path = require('path');
var Promise = require('promise');

var readdir = Promise.denodeify(fs.readdir);
var stat = Promise.denodeify(fs.stat);

var dir = path.join(__dirname, 'data');

function statFile(filename) {
	return stat(filename).then(function(stat) {
		if (stat.isFile()) {
			return stat;
		} else {
			throw new Error('not a file');
		}
	})
}

readdir(dir).then(function (files) {

console.log(dir);

  files = files.map(function (filename) {
    return path.join(dir, filename);
  });

  return Promise.all(files.map(function (file) {
  	return statFile(file);

  })).then(function(results) {
	console.log(results.reduce(function(last, cur) {
		return last + cur.size;
	}, 0));
  })
}).catch(function(error) {
	console.log(error);
}).done(function(results) {
	console.log(results);
});