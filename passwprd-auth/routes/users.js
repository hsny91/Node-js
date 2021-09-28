const express = require("express");
const router = express.Router();

router.get("/login", (req, res, next) => {
  res.render("pages/login");
});
router.get("/register", (req, res, next) => {
  res.render("pages/register");
});

module.exports = router;
