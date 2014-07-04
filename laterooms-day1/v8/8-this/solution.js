'use strict';

// our custom, special console
var debug = require('./debug');

function getValue(params, callback) {
  callback(params.value || 'no value');
}

// seems verbose
getValue({value: 'manchester'}, function (value) {
  debug.log(value);
});


// just goes straight to error
getValue(false, debug.error.bind(debug));