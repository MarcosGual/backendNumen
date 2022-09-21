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

// req: request (petición) ; res: response
app.get("/usuario", (req, res) => {
  res.send(`Buenos días, usuario`);
});

app.get("/productos", (req, res) => {
  res.json([
    {
      id: 1,
      nombre: "remera",
      precio: 2500,
    },
    {
      id: 2,
      nombre: "buzo",
      precio: 6000,
    },
  ]);
});

app.get("/test", (req, res) => {
  res.send({ msj: "Mensaje para el usuario", cantMsj: 2 });
});

app.get("/lista", (req, res) => {
  res.json(lista);
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
    modelo: req.params.modelo,
  });
});

//http://localhost:3000/curso?curso=0322tm
app.get("/curso", (req, res) => {
  res.json({
    curso: req.query.curso,
    dias: req.query.dias,
    hora: req.query.hora,
  });
});

app.get("/suma/:num1/:num2", (req, res) => {
  let valor1 = Number(req.params.num1);
  let valor2 = Number(req.params.num2);

  //console.log(typeof req.params.num1);

  res.json({ resultado: valor1 + valor2 });
});
