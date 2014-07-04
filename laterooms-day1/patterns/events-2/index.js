'use strict';
var read = require('./read');
var utils = require('./utils');
var events = new require('events');
var ee = new events.EventEmitter();

read('./index.js', function (error, data) {
  ee.emit('data', data);
});

ee.on('data', utils.length);
ee.on('data', utils.print);