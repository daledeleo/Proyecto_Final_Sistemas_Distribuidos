var express = require('express');
var router = express.Router();
var usersController = require('../models/user.controller')

/* GET users listing. */
router.get('/users', [
    usersController.findAll
]);

router.get('/users/:userId', [
    usersController.getByUsername
]);

router.post('/users', [
   usersController.insert
]);

module.exports = router;
