require('dotenv').config()
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const MongoStore = require('connect-mongo');

//forma de importar en node/express va a ser con require
// voy a declarar una variable en la cual voy a guardar el resultado del require
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const mascotasRouter = require("./routes/mascotas");
const tarjetasRouter = require("./routes/tarjetas");

const connect = require("./db/db");

const app = express();

//CONFIGURANDO Y UTILIZANDO MIDLEWARES
app.use(logger("dev"));
app.use(express.json()); //nos va a permitir enviar nuestras respuestas en formato JSON
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    store: MongoStore.create({mongoUrl: process.env.MONGO_URL})
  })
);

//RUTAS
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/mascotas", mascotasRouter);
app.use("/tarjetas", tarjetasRouter);

connect();

module.exports = app;
