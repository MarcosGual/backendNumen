const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const db = require("./models/index");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const cursosRouter = require("./routes/cursos");

const app = express();

app.use(logger("dev"));
app.use(express.json());

(async () => {
  await db.sequelize.sync();
})();

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/cursos", cursosRouter);

module.exports = app;
