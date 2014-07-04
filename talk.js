function function_that_says_something(text) {
	console.log(text);
}

function shout(text) {
	console.log(text.toUpperCase());
}

function think(text) {
	console.log ('... ' + text + ' ...');
}

var json = {
	item1: 1,
	item2: "2"
}

module.exports = {
	say: function_that_says_something,
	shout: shout,
	think: think,
	json: json
}