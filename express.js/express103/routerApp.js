// express.Router()
const express = require("express");
const app = express();
const helmet = require("helmet");

app.use(helmet());
app.use(express.urlencoded());
app.use(express.json());
app.use(exppress.static('public'))



app.listen(3000)