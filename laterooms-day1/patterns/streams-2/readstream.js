var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/../data/alpha');

readStream.on('data', function (chunk) {
  console.log(chunk);
});
