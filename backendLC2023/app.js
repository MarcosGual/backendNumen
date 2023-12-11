const express = require("express");
const app = express();
const cors = require ('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dbConnect = require("./database/dbConnection");
require('dotenv').config();

app.use(express.json()); //para entender los json
app.use(cors());//habilitando cors para todas las rutas

const taskRouter = require("./routes/tasks");
const userRouter = require("./routes/users");

const timeStamp = require("./middleware/logTimeStamp");

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false
}))
app.use(cookieParser());
app.use(timeStamp);

app.use("/tasks", taskRouter); //inicio de la ruta como primer argumento, y luego el ruteador como segundo
app.use("/users", userRouter);

dbConnect(); //conectar a la base de datos

module.exports = app;
