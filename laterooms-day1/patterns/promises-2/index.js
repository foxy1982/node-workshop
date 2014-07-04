'use strict';
var http = require('http');
var fs = require('fs');
var path = require('path');
var Promise = require('rsvp').Promise;

function getData(url) {
  var filename = path.resolve(__dirname, '..', 'data', url.slice(1));
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, 'utf8', function (error, data) {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

var server = http.createServer(function (req, res) {
  getData(req.url).then(function (data) {
    res.statusCode = 200;
    res.end(JSON.parse(data));
  }).catch(function (error) {
    res.statusCode = 500;
    res.end(error);
  });
});

server.listen(process.env.PORT || 3000);