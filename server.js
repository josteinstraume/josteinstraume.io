'use strict';

var express = require('express');
var http = require('http');
var app = express();

app.use(express.static(__dirname + '/static'));

var server = http.createServer(app);

//app.listen(80);
app.listen(process.env.PORT || 80);
console.log('portfolio express server started');

