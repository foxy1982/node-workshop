'use strict';
var fs = require('fs');
var events = require('events');
var util = require('util');



function Read(filename) {
  events.EventEmitter.call(this);
  // var self = this;
  fs.readFile(filename, 'utf-8', function(err, data) {
	if (err) {
		return this.emit('error', err);
	}
  	this.emit('loaded', data);
  }.bind(this));
};

util.inherits(Read, events.EventEmitter);

module.exports = Read;

Read.prototype.print = function(event, data) {
  console.log(event);
}

/* module.exports = function (filename) {
  var eventEmitter = new FileEventEmitter();

  fs.readFile(filename, 'utf-8', function(err, data) {
	if (err) {
		return eventEmitter.emit('error', err);
	}
  	eventEmitter.emit('loaded', data);
  });
  return eventEmitter;
};
*/

/*  PART ONE - USING RAW EVENT EMITTER

'use strict';
var fs = require('fs');
var events = require('events');


module.exports = function (filename) {
  var eventEmitter = new events.EventEmitter();
  fs.readFile(filename, 'utf-8', function(err, data) {
	if (err) {
		return eventEmitter.emit('error', err);
	}
  	eventEmitter.emit('loaded', data);
  });
  return eventEmitter;
};

*/