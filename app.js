const express = require("express");
const bodyParser = require('body-parser');

const app = express();


const port = 3000;


// parse application/json
app.use(bodyParser.json());

// nodejs core API
// Event emitter
// Buffer
// Filesystem
// Stream
// Http
// Multi threaded

// app.get("/", (req, res) => {
//   res.send("Welcome the node js world");
// });

app.get("/", (req, res) => {
  res.json({
    data: {
      status: 200,
      message: "Welcome to the node js world",
    },
  });
});

app.post('/', (req, res) => {
  console.log('Got a POST request');
  console.log('Request body:', req.body);
  res.json({
    data: {
      status: 200,
      message: {data: req.body},
    },
  });
});

app.listen(port, () => {
  console.log("Server is running on port ", port);
});

// get, post, delete, put
