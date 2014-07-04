# Task

Now that we have a promise to `getData`, let's parse the JSON response and send that back.

Create a promise based function for parsing JSON, and then chain your promise calls together to resemble the following pseudo code to return the JSON's `user` property:

```text
getData
  then -> parse
  then -> res.send Object.user
```

Finally, if the file isn't found, send a default JSON message, such as:

```json
{
  "user": "not found"
}
```