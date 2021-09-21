const express = require("express");
let router = express.Router();

router.get("/", (req, res, next) => {
  res.json({
    masg: "router works!",
  });
});

module.exports=router