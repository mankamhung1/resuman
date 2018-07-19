var express = require('express')
var bodyParser = require('body-parser')
var axios = require('axios')

var app = express();

app.get('/', function(req, res) {
  console.log('homepage called')
  axios({
    method: 'get',
    // url: 'https://auth.indeed.com/resumes/ade44b43fbe56759',
    url: 'https://auth.indeed.com/resumes',
    params: {
      client_id: 'd3a33591dad1256ed38351d7d3c14072e5d06a2e2c827b51f00e7224101a3b5a',
      v: 1,
      q: 'title:(Web+developer)',
      l: ''
    }
    // },
    // config: { headers: {'Content-Type': 'multipart/form-data' }}
  }).then(
    (response) => {
      //handle success
      console.log(response.data);
      res.send(response.data)
    },
    (error) => {
      resp = JSON.stringify(error.response.data)
      res.send(resp);
    }
  ) ;
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

app.post('/login', function(req, res) {
  console.log(req.path);
  res.send('post received');
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
}

var client = new pg.Client(config);

client.connect();

client.query('SELECT * FROM restaurants', function(err, results) {
  if(err) {
    console.log(err);
  }
  console.log(results.rows);
})

app.listen(8081);