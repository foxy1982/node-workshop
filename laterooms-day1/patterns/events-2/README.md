# Task

Read a file and echo out the length of the file and the contents.

`index.js` uses an event emitter directly, but we want to upgrade `read.js` to emit events, so the code would look a bit like this:

```js
var read = require('./read');

read('./index.js').on('loaded', function () {
  // do stuff
}).on('loaded', function () {
  // do other stuff
})
```

Because this could allow us to export the result of `read('file')` and listen to the events later on.