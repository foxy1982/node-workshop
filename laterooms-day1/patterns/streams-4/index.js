'use strict';
var fs = require('fs');
var request = require('request');

var options = {
  url: 'https://api.github.com/repos/jsbin/jsbin/contributors',
  headers: {
    'user-agent': 'node.js'
  }
};

request(options).pipe(fs.createWriteStream(__dirname + '/contributors-stream.json'));
