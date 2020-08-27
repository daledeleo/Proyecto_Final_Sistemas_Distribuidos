/*const express  = require('express');
const routesUser = require('./routes/user.routes');
const bodyParser = require('body-parser');

var app = express();

var port  = process.env.PORT || 8080;

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
  res.end(`<h1>${process.env.MESSAGE}</h1>`);
}).listen(8080);