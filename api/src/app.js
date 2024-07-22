const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();

//Middlewares
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))

module.exports = app;