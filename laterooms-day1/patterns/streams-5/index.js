var fs = require('fs');

var request = require('request');

var es = require('event-stream');

var writeStream = fs.createWriteStream(__dirname + '/contributors.json');

/*
var api = request({
  //url: 'https://api.github.com/repos/jsbin/jsbin/contributors',
  url: 'http://jsbin.com/rem/last',
  headers: {
    'user-agent': 'node.js'
  }
});
*/
fs.createReadStream(__dirname + '/contributors-source.json')
	.pipe(es.parse())
	.pipe(es.map(function (dataArray, done) {
		done(null, dataArray.map(function (item) {
			return { name : item.login, url: item.avatar_url };
		}))
	}))
	.pipe(es.stringify())
	.pipe(writeStream);
