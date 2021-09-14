const express=require('express')
const app = express();
//app comes with a use method
// use takes 1 argumant the middleware you want ro run

app.use(express.static('public'))
// when we write localhost:3000/style.css we can see context of style.css
// when we rite localhost:3000/node.jpg we can see image


app.listen(3000);
