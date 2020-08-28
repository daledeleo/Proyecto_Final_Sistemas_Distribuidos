/*const express  = require('express');
const routesUser = require('./routes/user.routes');
const bodyParser = require('body-parser');
const redis = require("redis");
const axios = require("axios");

var port  = process.env.PORT || 8080;

// express server
var app = express();


app.use(bodyParser.json());
app.use(routesUser);

var server = app.listen(port, function(){
    console.log('Servidor web iniciado on port ' + port);
});
*/


var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`<h1>Proyecto Final de Sistemas Distribuidos</h1>
           <h2>${process.env.MESSAGE}</h2> 
           <h2>Corriendo en puerto 8080</h2>`);
}).listen(8080);