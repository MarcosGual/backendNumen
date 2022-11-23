const express = require("express");
const app = express();
const port = 8080;

const listaCosas = {
  cosas: [
    {
      id: 1,
      nombre: "heladera",
    },
    {
      id: 2,
      nombre: "televisor",
    },
  ],
};

app.get("/", (req, res) => {
  res.send("Hola mundo!");
});

app.listen(port, () => {
  console.log(`App ejemplo ejecutándose en http://localhost:${port}`);
});

app.get("/usuario/1", (req, res) => {
  res.json({
    mensaje: "Bienvenido usuario 1",
    cantidadMsjs: 30,
  });
});

app.get("/test", (req, res) => {
  res.send("Esto es una prueba");
});

app.get("/lista", (req, res) => {
  res.json(listaCosas);
});

//RUTAS CON PARÁMETROS
app.get("/lista/:id", (req, res) => {
  //parseo
  const id = Number(req.params.id);
  if (id) {
    const resultado = listaCosas.cosas.find((x) => x.id === id);
    res.json(resultado);
  } else {
    res.json({ error: "Error en la petición" });
  }
});

app.get("/suma/:num1/:num2", (req, res) => {
  const resultadoSuma = Number(req.params.num1) + Number(req.params.num2);

  res.json({ resultadoSuma: resultadoSuma });
});

app.get("/prueba/:edad", (req,res)=>{
    let nombre=req.query.nombre;
    let apellido= req.query.apellido;
    let edad=Number(req.params.edad);

    res.json({
        nombre: nombre,
        apellido: apellido,
        edad: edad
    })
})
