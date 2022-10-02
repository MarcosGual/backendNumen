const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const app = express();

const indexRouter = require("./routes/index");

//configuraciones
app.use(logger("start"));
app.use(express.json());
app.use(cors);

app.use("/", indexRouter);

module.exports = app;
