var express = require('express');
var router = express.Router();
var usersController = require('../controllers/user.controller')

app.post('/auth', [
       VerifyUserMiddleware.hasAuthValidFields,
       VerifyUserMiddleware.isPasswordAndUserMatch,
       AuthorizationController.login
   ]);
