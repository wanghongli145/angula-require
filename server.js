const express = require('express');
const path = require('path');
var server = express();
server.use(express.static(path.join(__dirname, '/')));
server.use('/', function (req, res) {
  console.log('use');
})
server.listen(2222);