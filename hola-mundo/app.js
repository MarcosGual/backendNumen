const express = require("express");
const app = express();
const port = 3000;

const cosas = [
  { id: 1, nombre: "Heladera" },
  { id: 2, nombre: "Televisor" },
  { id: 3, nombre: "Microondas" },
  { id: 4, nombre: "Batidora" },
  { id: 5, nombre: "Mesa" },
  { id: 6, nombre: "Silla" },
];

//req--> request (petición)
//res--> response (respuesta)
app.get("/", (req, res) => {
  res.send("<h1>Hola mundo</h1>");
});

app.listen(port, () => {
  console.log(`App de ejemplo funcionando. Entrar: http://localhost:${port}`);
});

app.get("/saludar-usuario", (req, res) => {
  res.send("<h2>Hola usuario!!</h2>");
});

app.get("/info-usuario", (req, res) => {
  res.json({
    usuario: "desconocido",
    email: "desconocido",
  });
});

//parámetros de ruta
app.get("/cosas", (req, res) => {
  res.json(cosas);
});

//con parámetro id (el parámetro de ruta se va a esperar con los dos puntos)
app.get("/cosas/:id", (req, res) => {
  const id = Number(req.params.id);
  const cosa = cosas.find((cosa) => cosa.id === id);

  if (cosa) {
    res.status(200).json({
      cosa: cosa,
      statusCode: 200,
      errorMessage: null,
    });
  } else {
    res.status(404).json({
      cosa: null,
      statusCode: 404,
      errorMessage: "Recurso no encontrado",
    });
  }
});

//queries: consultas
app.get("/autorizacion", (req, res) => {
  const numero = Number(req.query.q);

  if (isNaN(numero)) {
    res.status(500).json({
      cosa: null,
      statusCode: 500,
      errorMessage: "Ingreso no válido",
    });
  } else {
    if (numero % 2 === 0) {
      res.status(200).json({
        autorizacion: "autorizado",
        statusCode: 200,
        errorMessage: null,
      });
    } else {
      res.status(401).json({
        autorizacion: "no autorizado",
        statusCode: 401,
        errorMessage: null,
      });
    }
  }
});
