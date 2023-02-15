const express = require("express");
const app = express();
const session = require("express-session");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const MongoStore = require("connect-mongo");
const port = 3000;

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const dbConnect = require("./database/dbConnection");

//MIDDLEWARES
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URL }),
  })
);

app.use("/", indexRouter); //ruta raíz
app.use("/users", usersRouter);

//levanta el servidor
app.listen(port, () => {
  console.log(`App ejemplo escuchando en http://localhost:${port}`);
});

dbConnect();
