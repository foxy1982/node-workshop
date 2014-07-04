'use strict';
var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function (req, res) {
  var filename = path.resolve(__dirname, '..', 'data', req.url.slice(1));
  fs.readFile(filename, 'utf8', function (error, data) {
    if (error) {
      res.statusCode = 500;
      return res.end(data);
    }

    res.statusCode = 200;
    res.end(data);
  });
});

server.listen(process.env.PORT || 3000);