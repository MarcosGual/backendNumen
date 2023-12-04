const express = require("express");
const app = express();
const dbConnect = require("./database/dbConnection");

app.use(express.json()); //para entender los json

const taskRouter = require("./routes/tasks");
const userRouter = require("./routes/users");

const timeStamp = require("./middleware/logTimeStamp");

app.use(timeStamp);

app.use("/tasks", taskRouter); //inicio de la ruta como primer argumento, y luego el ruteador como segundo
app.use("/users", userRouter);

dbConnect(); //conectar a la base de datos

module.exports = app;
