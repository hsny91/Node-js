// express is a 3rd party module

const express = require('express');
// an app is the express function cretateApplication inside the express module
const app= express();
// all is a method and it takes 2 argumnats
// 1. route
// 2.callback to ru if the route is requested

app.all('*',(req,res)=>{
    res.send('<h1>This is the home page</h1>')
})
app.listen(3000)