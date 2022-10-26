const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
require("dotenv").config();

const app = express();

const indexRouter = require("./routes/index");
const gatosRouter = require("./routes/gatos");
const userRouter = require("./routes/user");

const { connect } = require("./db/db");

//configuraciones
app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

app.use("/", indexRouter);
app.use("/gatos", gatosRouter);
app.use("/user", userRouter);
connect();

module.exports = app;
