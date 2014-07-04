'use strict';

var people = {
  doug : { age: 38, kg: 80 },
  jane : { age: 34, kg: 65 }
};

for (var name in people){
  var data = people[name];
  console.log(data);
}