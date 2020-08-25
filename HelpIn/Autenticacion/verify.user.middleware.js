const users = require('../models/usuarios')


exports.isPasswordAndUserMatch = (req, res, next) => {
   users.findByUsername(req.body.username)
       .then((user)=>{
           if(!user){
               res.status(404).send({});
           }else{
               let passwordFields = user.password.split('$');
               let salt = passwordFields[0];
               let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest("base64");
               if (hash === passwordFields[1]) {
                   req.body = {
                       username: user.username,
                       permissionLevel: user.permissionLevel,
                       provider: 'email',
                   };
                   return next();
               } else {
                   return res.status(400).send({errors: ['Invalid email or password']});
               }
           }
       });
};

exports.login = (req, res) => {
   try {
       let refreshId = req.body.username + jwtSecret;
       let salt = crypto.randomBytes(16).toString('base64');
       let hash = crypto.createHmac('sha512', salt).update(refreshId).digest("base64");
       req.body.refreshKey = salt;
       let token = jwt.sign(req.body, jwtSecret);
       let b = new Buffer(hash);
       let refresh_token = b.toString('base64');
       res.status(201).send({accessToken: token, refreshToken: refresh_token});
   } catch (err) {
       res.status(500).send({errors: err});
   }
};
