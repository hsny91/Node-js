const express = require("express");
const app = express();
const PORT = 5000;
const userRouter=require('./routes/users')

app.use(userRouter)

app.get("/", (req, res, next) => {
    res.send("Home Page");
  });
app.use((req,res,next)=>{
res.send("404 Not Found")
})
app.listen(PORT, () => {
  console.log("App Started");
});


