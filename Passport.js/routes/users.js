const express = require("express");
const router = express.Router();


router.get('/login',(req,res,next)=>{
    res.send("login Page")
})

router.get('/register',(req,res,next)=>{
    res.send("register Page")
})

module.exports=router;