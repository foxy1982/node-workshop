'use strict';
var fs = require('fs');

module.exports = function (filename, callback) {
  fs.readFile(filename, callback);
};