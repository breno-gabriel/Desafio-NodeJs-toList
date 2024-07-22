const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const taskRouter = require("./routes/taskRoutes");
const memberRouter = require("./routes/memberRouter")

const app = express();

//Middlewares
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/api', memberRouter)
app.use('/api', taskRouter)

module.exports = app;