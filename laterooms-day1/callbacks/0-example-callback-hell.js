var fs = require('fs'),
    path = require('path');

var time = Date.now() - (1000 * 60 * 60 * 24);

function changedSince(time, dir, callback) {
  var changed = [],
      todo = 0,
      done = function () { // why you no use async, remy? – Remy
        todo--;
        if (todo === 0) {
          callback(changed);
        }
      };

  fs.readdir(dir, function (err, files) {
    if (err) {
      return;
    }

    files.forEach(function (file) {
      if (file.indexOf('.') !== 0) {
        todo++;
        file = path.resolve(dir + '/' + file);
        fs.stat(file, function (err, stat) {
          if (stat) {
            if (stat.isDirectory()) {
              todo++;
              changedSince(time, file, function (subChanged) {
                if (subChanged.length) {
                  changed = changed.concat(subChanged);
                }
                done();
              });
            } else if (stat.mtime > time) {
              changed.push(file);
            }
          }
          done();
        });
      }
    });
    done();
  });
}

changedSince(time, process.cwd(), function (files) {
  console.log(files);
});