'use strict';
var fs = require('fs');
var es = require('event-stream');
var request = require('request');

var ext = 'html';

var writeStream = fs.createWriteStream(__dirname + '/contributors.' + ext);

var apiRequest = request({
  url: 'https://api.github.com/repos/jsbin/jsbin/contributors',
  headers: {
    'user-agent': 'node.js'
  }
});

function asObject(data, complete) {
  complete(null, data.map(function (user) {
    return {
      name: user.login,
      avatar: user.avatar_url // jshint ignore:line
    };
  }));
}

function asHTML(data, complete) {
  complete(null, '<ul>' + data.map(function (user) {
    return '<li><img width="16" src="' + user.avatar_url + '"> ' + user.login + '</li>'; // jshint ignore:line
  }).join(''));
}

apiRequest
  .pipe(es.split())
  .pipe(es.parse())
  .pipe(es.map(ext === 'html' ? asHTML : asObject))
  .pipe(ext === 'html'? es.through() : es.stringify())
  .pipe(writeStream);
