'use strict';

Object.prototype.foo = 'bar';

var people = {
  doug : { age: 38, kg: 80 },
  jane : { age: 34, kg: 65 }
};

Object.keys(people).forEach(
	function(name) {
		console.log(people[name]);
	});

/*
for (var name in people) {
 	var data = people[name];
  	if (people.hasOwnProperty(name)) {
  		console.log(data);
	}
}
*/

var ages = Object.keys(people).map(
	function(name) {
		console.log(people[name].age);
	});