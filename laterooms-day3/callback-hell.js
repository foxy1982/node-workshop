'use strict';

var fs = require('fs');

var total = 0;

fs.readdir(__dirname + 'remy', function (error, files) {
  if (error) {
    console.log(error);
    process.exit(1);
  }

  files.forEach(function (file) {
    fs.stat(file, function (err, stat) {
      length--;
      if (stat.isFile()) {
        total += stat.size;
        if (length === 0) {
          console.log(total);
        }
      }
    });
  });
});