const express = require("express");
const exphbs = require("express-handlebars");

const userRouter = require ('./routes/users')

const app = express();
const PORT = 5000 || process.env.PORT;

 // Template Engine Middleware
app.engine('handlebars', exphbs({defaultLayout: 'mainLayout'}));
app.set('view engine', 'handlebars');

app.use(userRouter)

app.get("/", (req, res, next) => {
  res.render("pages/index");
});

app.use((req,res,next)=>{
    res.send("404 not found")
})

app.listen(PORT, () => {
  console.log("App Starter");
});
