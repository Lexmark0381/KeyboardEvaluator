var io = require('socket.io')(3001);
var text = "";

var express = require('express')
var app = express()
app.listen(3000);


app.use('/', express.static('.'));

