const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRouter = require("./routes/users");

const app = express();
const PORT = 5000 || process.env.PORT;

// MongoDb Connection
const db = mongoose.connect(
  "mongodb+srv://husniye:sakmak4326@cluster0.ffiih.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  (error) => {
    if (!error) {
      console.log("connected to mongo db");
    }
  }
);

// Template Engine Middleware
app.engine("handlebars", exphbs({ defaultLayout: "mainLayout" }));
app.set("view engine", "handlebars");

// Body-parser middleware
app.use(bodyParser.urlencoded({extended: false}));

app.use(userRouter);

app.get("/", (req, res, next) => {
  res.render("pages/index");
});

app.use((req, res, next) => {
  res.send("static/404");
});

app.listen(PORT, () => {
  console.log("App Starter");
});
