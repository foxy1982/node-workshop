'use strict';
var config = {
	url : '/database'
};

Object.freeze(config);

///// would do module export here

console.log(config.url);

config.url2 = "test";

Object.seal(config);

config.url3 = "trevor";