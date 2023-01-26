const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

//forma de importar en node/express va a ser con require
// voy a declarar una variable en la cual voy a guardar el resultado del require
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const mascotasRouter = require("./routes/mascotas");

const connect = require("./db/db");

const app = express();

//CONFIGURANDO Y UTILIZANDO MIDLEWARES
app.use(logger("dev"));
app.use(express.json()); //nos va a permitir enviar nuestras respuestas en formato JSON
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//RUTAS
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/mascotas", mascotasRouter);

connect();

module.exports = app;
