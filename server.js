'use strict';

var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

app.listen(80);
//app.listen(process.env.PORT || 9000);
console.log('portfolio express server started');
