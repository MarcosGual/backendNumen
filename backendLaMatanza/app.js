const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const { connect } = require("./db/dbConexion");

//ruta index: requiere el archivo routes/index y lo guarda en una variable
const indexRouter = require("./routes/index");
//ruta users: requiere el archivo routes/users y lo guarda en una variables
const usersRouter = require("./routes/users");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
//app.use(cors());
app.use(
  session({
    secret: "clave_secreta",
    resave: true,
    saveUninitialized: true,
  })
);

app.use("/", indexRouter);
app.use("/users", usersRouter);

connect();

module.exports = app;
