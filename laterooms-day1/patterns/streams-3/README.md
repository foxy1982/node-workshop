# Task

Pipe the `ReadStream` to a `TransformStream` before piping to the `process.stdout` WriteStream.

Try to turn all the text to uppercase, you'll need to use `event-stream`, specifically `split`, `join` and `map`.