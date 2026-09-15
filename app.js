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

// app.get("/product", (req, res) => {
//   console.log("Got a GET request",req);
//   res.json({
//     data: {
//       status: 200,
//       message: "Welcome to the node js world",
//     },
//   });
// });

app.get("/product", (req, res) => {
  console.log("Got a GET request");
  console.log("Product ID:", req.query.productId);

  res.json({
    data: {
      status: 200,
      message: "Welcome to the node js world",
      productId: req.query.productId
    }
  });
});

app.post('/product', (req, res) => {
  console.log('Got a POST request');
  console.log('Request body:', req.body);
  res.json({
    data: {
      status: 200,
      message: {data: req.body},
    },
  });
});

app.delete('/product/:id', (req, res) => {
  console.log('Got a DELETE request');
  console.log('Request params:', req.params);
  res.json({
    data: {
      status: 200,
      message: "Delete the user with id " + req.params.id,
    },
  });
});

app.listen(port, () => {
  console.log("Server is running on port ", port);
});

// get, post, delete, put
