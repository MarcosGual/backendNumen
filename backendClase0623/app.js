const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
require('dotenv').config(); //iniciamos la librería dotenv

//importaciones de las rutas
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const dbConnect = require('./database/dbConnection');
const loggerMiddleware = require('./middleware/loggerMiddleware');

const app = express();

//configuración de los middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ //configuramos express-session
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}))
app.use(loggerMiddleware);

//configuración de las rutas
app.use('/', indexRouter); //ruta raíz
app.use('/users', usersRouter); //ruta de usuarios
app.use('/auth', authRouter); //ruta de auth

dbConnect(); //ejecutamos la función de conexión a la base de datos

module.exports = app;