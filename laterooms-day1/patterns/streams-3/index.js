var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/../data/alpha');

readStream.pipe(process.stdout);
