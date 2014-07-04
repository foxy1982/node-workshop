'use strict';

var fs = require('fs');
var Promise = require('promise');

var total = 0;

fs.readdir(__dirname, function (error, files) {
  if (error) {
    console.log(error);
    process.exit(1);
  }

  var length = files.length;

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

function getFileStats(filename) {
  return new Promise(function(resolve, reject) {
    fs.stat(filename, function(error, stat) {
      if (error) return reject(err);

      resolve({
        isFile: stat.isFile(),
        size: stat.size
      });
    });
  });
}

function getFiles(directoryName) {
  return new Promise(function(resolve, reject) {
    fs.readdir(directoryName, function(error, files) {
        if (error) return reject(error);

        var length = files.length;

        files.forEach(function (file) {
          getFileStats(file);
        })
    });
  });
}