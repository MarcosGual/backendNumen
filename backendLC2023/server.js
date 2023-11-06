const express = require('express'); //importando el módulo de express
const app = require('./app');
// const app = express(); //app de mi servidor --> retorno de express ejecutado como función

const port = 3000; //puerto declarado para iniciar la aplicación

//listen: método de escuchar (inicio del funcionamiento del servidor)
app.listen(port, () => {
    console.log(`App funcionando en http://localhost:${port}`);
})