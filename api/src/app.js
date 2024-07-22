const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const memberRouter = require("./routes/memberRouter");

const app = express();

//Middlewares
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/api', memberRouter);

module.exports = app;