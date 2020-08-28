//set up dependencies
const express = require("express");
const redis = require("redis");
const axios = require("axios");
const bodyParser = require("body-parser");
const http = require('http');
const https = require('https')


//setup port constants
const port_redis = process.env.PORT || 6379;
const port = process.env.PORT || 5000;

//configure redis client on port 6379
const redis_client = redis.createClient(port_redis);

//configure express server
const app = express();


//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Middleware Function to Check Cache
// checkCache = (req, res, next) => {
//   const { id } = req.params;

//   redis_client.get(id, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send(err);
//     }
//     //if no match found
//     if (data != null) {
//       res.send(data);
//     } else {
//       //proceed to next middleware function
//       next();
//     }
//   });
// };

//  Endpoint:  GET /users/:id
//  @desc Return user data for particular username
app.get("/users/:id", async (req, res) => {
  
    try {
      const { id } = req.params;
      const user = await axios.get(`http://localhost:8000/users/${id}/`
      );
  
      //get data from response
      const userInfoData = user.data;

      console.log(userInfoData);

      // add data to Redis
      // key = id
      // duration = 3600s
      // value = userdata json
      // redis_client.setex(id, 60, JSON.stringify(userInfoData));
  
      return res.json(userInfoData);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  });

//listen on port 5000;
app.listen(port, () => console.log(`Server running on Port ${port}`));