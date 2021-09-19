const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Anasayfa</h1>");
});

// html dosyasini okumak
app.get("/html", (req, res) => {
  res.sendFile('./views/index.html', {root:__dirname});
});

app.get("/about", (req, res) => {
    res.sendFile('./views/about.html', {root:__dirname});
  });
app.get('/about-us',(req,res)=>{
    res.redirect('/about')
})
app.use((req,res)=>{
res.status(404).sendFile('./views/404.html', {root:__dirname})
})

app.listen(3000);
