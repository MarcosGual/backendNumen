const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const connect = require("./db/dbConexion");

//ruta index: requiere el archivo routes/index y lo guarda en una variable
const indexRouter = require("./routes/index");
//ruta users: requiere el archivo routes/users y lo guarda en una variables
const usersRouter = require("./routes/users");

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URL }),
  })
);

app.use("/", indexRouter);
app.use("/users", usersRouter);

connect();

module.exports = app;
