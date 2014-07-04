'use strict';

var fs = require('fs');
var Promise = require('promise');
var RSVP = require('rsvp');

var readdir = Promise.denodeify(fs.readdir);
var stat = Promise.denodeify(fs.stat);

var total = 0;

var dir = path.join(__dirname, 'data');

fs.readdir(dir).then(function (files) {

  files = files.map(function (filename) {
    return path.join(dir, filename);
  });

  stat(files[0]).then(function (stat) {
// how to merge?
  });
});