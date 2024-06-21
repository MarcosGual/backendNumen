const express = require("express");
const app = express();
const logTimeStamp = require("./middlewares/logTimeStamp");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const cookieParser = require('cookie-parser');

require("dotenv").config(); //inicializamos el acceso al archivo .env

const productRoutes = require("./routes/productRoutes");
const mathRoutes = require("./routes/mathRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

//middlewares globales
app.use(express.json());
app.use(logTimeStamp);
app.use(cookieParser());
app.use(
  session({
    //CONFIGURACIÓN DE LAS SESIONES
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URL }),
    // cookie: { secure: false },
  })
);

//middlewares ruteadores (routers)
app.use("/api/products", productRoutes);
app.use("/api/math", mathRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;
