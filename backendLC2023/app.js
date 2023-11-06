const express = require('express');
const app = express();

app.use(express.json()); //para entender los json

const taskRouter = require('./routes/tasks');
const timeStamp = require('./middleware/logTimeStamp');

app.use(timeStamp);

app.use('/tasks', taskRouter); //inicio de la ruta como primer argumento, y luego el ruteador como segundo

module.exports = app;