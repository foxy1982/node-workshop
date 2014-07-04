'use strict';

Object.prototype.foo = 'bar';

var people = {
  doug : { age:38, male:true,  kg:80 },
  jane : { age:34, male:false, kg:65 }
};

Object.keys(people).forEach(function (name) {
  var data = people[name];
  console.log(data);
});