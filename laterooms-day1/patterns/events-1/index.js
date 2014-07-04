'use strict';
var Read = require('./read');
var utils = require('./utils');
var events = require('events');


var emitter = new Read('./index.js');
emitter.on('loaded', emitter.print);
emitter.on('error', showError);

function showError(error) {
	console.error(error);
}

function logInfo(data) {
	utils.length(data);	
	utils.print(data);
}

/* PART ONE - USING RAW EVENT EMITTER

'use strict';
var read = require('./read');
var utils = require('./utils');
var events = require('events');


var emitter = read('./index.js');
emitter.on('loaded', logInfo);
emitter.on('error', showError);

function showError(error) {
	console.error(error);
}

function logInfo(data) {
	utils.length(data);	
	utils.print(data);
}
*/