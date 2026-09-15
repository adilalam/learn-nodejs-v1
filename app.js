const express = require("express");
const app = express();

const port = 3000;

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

app.listen(port, () => {
  console.log("Server is running on port ", port);
});

// get, post, delete, put
