const express = require("express");

const app = express();

app.use(express.static("public")); // middleware
app.use(express.json()); // middleware
app.use(express.urlencoded({ extended: false }));

app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.send('Test');
});
app.listen(3000)