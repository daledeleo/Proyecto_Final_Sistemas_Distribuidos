const express  = require('express');
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
