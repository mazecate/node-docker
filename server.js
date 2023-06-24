const express = require('express');
const app = express();

const PORT = 8099;

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.listen(PORT, function () {
  console.log(`app listening on port ${PORT}!`)
});
