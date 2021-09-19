const express = require("express");
const app = express();
app.set('view engine','ejs')

app.get("/", (req, res) => {
  res.render("<h1>Anasayfa</h1>");
});

// html dosyasini okumak
app.get("/html", (req, res) => {
  res.render('index',{title:'Anasayfa'});
});

app.get("/about", (req, res) => {
    res.render('about');
  });
app.get('/about-us',(req,res)=>{
    res.redirect('/about')
})
app.use((req,res)=>{
res.status(404).render('404')
})

app.listen(3000);
