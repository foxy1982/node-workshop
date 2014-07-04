'use strict';
var http = require('http');
var rsvp = require('rsvp');

var Promise = rsvp.Promise;

var routes = {
  '/': function (req, res) {
    res.write('index!');
    res.end();
  },
  '/about': function (req, res) {
    res.write('About me!!');
    res.end();
  },
  'default': function (req, res) {
    res.write('default');
    res.end();
  }
};

var getRoute = function (route) {
  var promise = new Promise(function (resolve, reject) {
    if (routes[route]) {
      resolve(routes[route]);
    } else {
      reject(null);
    }
  });
  return promise;
};

var checkArgs = function (fn) {
  var promise = new Promise(function (resolve, reject) {
    if (fn.length !== 2) {
      reject(null);
    } else {
      resolve(fn);
    }
  });
  return promise;
};

var useDefault = function () {
  return routes.default;
};

var wrapRoute = function (fn) {
  var promise = new Promise(function (resolve, reject) {
    if (fn === routes.default) {
      return reject('not found');
    }
    var wrapped = function (req, res) {
      res.writeHead(200);
      res.write('wrapped\n');
      return fn(req, res);
    };
    resolve(wrapped);
  });
  return promise;
};

var executeRoute = function (req, res) {
  return function (fn) {
    fn(req, res);
  };
};

var server = http.createServer(function (req, res) {
  getRoute(req.url)
    .then(checkArgs)
    .catch(useDefault)
    .then(wrapRoute)
    .then(executeRoute(req, res));
});

server.listen(3000);
