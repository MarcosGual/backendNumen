const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hola mundo!");
});

app.listen(port, () => {
  console.log(
    `App de ejemplo escuchando en el puerto: http://localhost:${port}`
  );
});

app.get("/usuario", (req, res) => {
  res.send("Santiago Fernández");
});

app.get("/test", (req, res) => {
  res.send({ msj: "Mensaje para el usuario", cantMsj: 2 });
});

app.get("/alumno/:nombre/:edad", (req, res) => {
  //res.send(`Buenos días, alumno ${req.params.nombre}!`);
  res.json({
    alumno: req.params.nombre,
    edad: req.params.edad,
  });
});

app.get("/producto/tipo/:tipo/marca/:marca/modelo/:modelo", (req, res) => {
    //res.send(`Buenos días, alumno ${req.params.nombre}!`);
    res.json({
      tipo: req.params.tipo,
      marca: req.params.marca,
      modelo: req.params.modelo
    });
  });