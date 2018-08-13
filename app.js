var express = require('express')
var bodyParser = require('body-parser')
var axios = require('axios')
var jwt = require('jwt-simple')

var app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
app.options('*', cors())
app.use(bodyParser())

app.get('/api/getResumeReference', function(req, res) {
  console.log('Requested resume reference for : ' + req.query.targetPosition)
  axios({
    method: 'get',
    url: 'https://auth.indeed.com/resumes',
    params: {
      client_id: 'd3a33591dad1256ed38351d7d3c14072e5d06a2e2c827b51f00e7224101a3b5a',
      v: 1,
      q: 'title:('+ req.query.targetPosition +')',
      l: ''
    }
    // },
    // config: { headers: {'Content-Type': 'multipart/form-data' }}
  }).then(
    (response) => {
      //handle success
      console.log(response.data)
      res.header("Access-Control-Allow-Origin", "*");
      res.send(response.data)
    },
    (error) => {
      resp = JSON.stringify(error.response.data)
      res.send(resp);
    }
  );
    // res.send('fukkk') 
    //getUser()
});


// async function getUser() {
//   try {
//     const response = await axios({
//           method: 'get',
//           url: 'https://auth.indeed.com/resumes/ade44b43fbe56759',
//           // params: {
//           //   client_id: 'd3a33591dad1256ed38351d7d3c14072e5d06a2e2c827b51f00e7224101a3b5a'
//           // },
//           // config: { headers: {'Content-Type': 'multipart/form-data' }}
//           });

//     console.log(response);
//   } catch (error) {
//     console.error(error);
//     res.send(error)
//   }
// }

// app.post('/login', function(req, res) {
//   console.log(req.path);
//   res.send('post received');
// });

app.post("/api/login", function(req, res) {  
  console.log('test')
  if (req.body.email && req.body.password) {
      var email = req.body.email;
      var password = req.body.password;
      var user = users.find((u)=> {
          return u.email === email && u.password === password;
      });
      if (user) {
          var payload = {
              id: user.id
          };
          var token = jwt.encode(payload, config.jwtSecret);
          res.json({
              token: token
          });
      } else {
          res.sendStatus(401);
      }
  } else {
      res.sendStatus(401);
  }
});

// facebook login
app.post("/api/login/facebook", function(req, res) {  
  if (req.body.access_token) {
      var accessToken = req.body.access_token;
      axios.get(`https://graph.facebook.com/me?access_token=${accessToken}`)
      .then((data)=>{
          if (!data.data.error) {
              var payload = {
                id: accessToken
              };
              // users.push({
              //   id: accessToken, // better to use DB auto increment ID
              //   name: "Facebook User", // better to use data or profile to check the facebook user name
              //   email: "placeholder@gmail.com", // better to use data or profile to check the email
              //   password: ""
              // })
              // Return the JWT token after checking
              var token = jwt.encode(payload, config.jwtSecret);
              res.json({
                token: token,
                username: data.data.name,
                userId: data.data.id
                // optionally provide also the user id to frontend
              });
          } else {
              res.sendStatus(401);
          }
      }).catch((err)=>{
          console.log(err);
          res.sendStatus(401);
      });
  } else {
      res.sendStatus(401);
  }
});


var pg = require('pg');

var config = {
  user: '',
  database: 'postgres',
  password: '',
  host: 'localhost',
  port: 5432,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  jwtSecret: "asdfghjkl"
}

var client = new pg.Client(config);

client.connect();

client.query('SELECT * FROM restaurants', function(err, results) {
  if(err) {
    console.log(err);
  }
  console.log(results.rows);
})

app.listen(port);