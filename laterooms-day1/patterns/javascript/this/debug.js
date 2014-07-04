'use strict';
module.exports = {
  log: function (msg) {
    console.log(msg);
  },
  error: function (msg) {
    this.log(msg.toUpperCase());
  }
};