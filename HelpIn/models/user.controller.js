const users = require('./usuarios')
const crypto = require('crypto');

exports.insert = (req, res) => {
   let salt = crypto.randomBytes(16).toString('base64');
   let hash = crypto.createHmac('sha512',salt)
                                    .update(req.body.password)
                                    .digest("base64");
   req.body.password = salt + "$" + hash;
   req.body.permissionLevel = 1;
   req.body.role = "user";
   users.createUser(req.body)
       .then((result) => {
           res.status(201).send({datos: result});
       });
};

exports.getByUsername = (req, res) => {
  users.findByUsername(req.params.userId).then((result) => {
    if(result)
      res.status(200).send(result);
    else
      res
      .status(400)
      .send({detail : "user not found"});
     });
};

exports.findAll = (req, res) => {
  users.findAllUsers().then((result) => {
    if(result)
      res.status(200).send(result);
    else
      res
      .status(400)
      .send({detail : "users not found"});
     });
};


exports.deleteUser = (req, res) => {
  users.deleteByUsername(req.params.userId).then((result) => {
    if(result)
      res.status(200).send({detail : "user removed"});
    else
      res
      .status(400)
      .send({detail : "user not found"});
     });
};