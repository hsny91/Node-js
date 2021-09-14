const express = require("express");
const app = express();
const fs = require("fs");


// app object has a few methodts (HTTP request methods)
// CRUD app
// 1.GET -Read
// 2.PUT - update
// 3.DELETE - delete
// 4.POST -create
// 5. ALL (i will accept any method)
// take 2 argumnet;1. path, 2. callback

app.get('/', (req, res) => {
    res.send("<h1>Welcome the Home POST page !</h1>");
  });

app.post('/', (req, res) => {
  res.send("<h1>Welcome the Home POST page !</h1>");
});


app.listen(3001);
