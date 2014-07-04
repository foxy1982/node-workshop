'use strict';
var fs = require('fs');

fs.readdir(process.cwd(), function (err, files) {
  files.forEach(function (file) {
    fs.stat(file, function (err, stat) {
      console.log(file, stat.size + ' bytes');
    });
  });
});

// sort by largest file