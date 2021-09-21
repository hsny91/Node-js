const express = require("express");
let router = express.Router();

function validatedUser(req,res,next){
  res.locals.validated=true
  console.log('validated')
  next();
}
router.use(validatedUser);

router.get("/", (req, res, next) => {
  res.json({
    masg: "user router works!",
  });
});

module.exports = router;
