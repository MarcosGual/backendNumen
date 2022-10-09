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
  // res.json([
  //   {
  //     id: 1,
  //     nombre: req.query.prod1,
  //     precio: 2500,
  //   },
  //   {
  //     id: 2,
  //     nombre: req.query.prod2,
  //     precio: 6000,
  //   },
  //   {
  //     id: 3,
  //     nombre: req.query.prod3,
  //     precio: 6000,
  //   },
  //   {
  //     id: 4,
  //     nombre: req.query.prod4,
  //     precio: 6000,
  //   },
  //   {
  //     id: 5,
  //     nombre: req.query.prod5,
  //     precio: 6000,
  //   },
  // ]);

  res.json({
    producto1: req.query.prod1,
    producto2: req.query.prod2,
  });
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
    cartas: [
      {
        id: 1,
        valor: "2",
        palo: "clubs",
        valorJuego: 2,
        img: "../assets/cartas/png-cartas/2_of_clubs.png",
      },
      {
        id: 2,
        valor: "2",
        palo: "diamonds",
        valorJuego: 2,
        img: "../assets/cartas/png-cartas/2_of_diamonds.png",
      },
      {
        id: 3,
        valor: "2",
        palo: "hearts",
        valorJuego: 2,
        img: "../assets/cartas/png-cartas/2_of_hearts.png",
      },
      {
        id: 4,
        valor: "2",
        palo: "spades",
        valorJuego: 2,
        img: "../assets/cartas/png-cartas/2_of_spades.png",
      },
      {
        id: 5,
        valor: "3",
        palo: "clubs",
        valorJuego: 3,
        img: "../assets/cartas/png-cartas/3_of_clubs.png",
      },
      {
        id: 6,
        valor: "3",
        palo: "diamonds",
        valorJuego: 3,
        img: "../assets/cartas/png-cartas/3_of_diamonds.png",
      },
      {
        id: 7,
        valor: "3",
        palo: "hearts",
        valorJuego: 3,
        img: "../assets/cartas/png-cartas/3_of_hearts.png",
      },
      {
        id: 8,
        valor: "3",
        palo: "spades",
        valorJuego: 3,
        img: "../assets/cartas/png-cartas/3_of_spades.png",
      },
      {
        id: 9,
        valor: "4",
        palo: "clubs",
        valorJuego: 4,
        img: "../assets/cartas/png-cartas/4_of_clubs.png",
      },
      {
        id: 10,
        valor: "4",
        palo: "diamonds",
        valorJuego: 4,
        img: "../assets/cartas/png-cartas/4_of_diamonds.png",
      },
      {
        id: 11,
        valor: "4",
        palo: "hearts",
        valorJuego: 4,
        img: "../assets/cartas/png-cartas/4_of_hearts.png",
      },
      {
        id: 12,
        valor: "4",
        palo: "spades",
        valorJuego: 4,
        img: "../assets/cartas/png-cartas/4_of_spades.png",
      },
      {
        id: 13,
        valor: "5",
        palo: "clubs",
        valorJuego: 5,
        img: "../assets/cartas/png-cartas/5_of_clubs.png",
      },
      {
        id: 14,
        valor: "5",
        palo: "diamonds",
        valorJuego: 5,
        img: "../assets/cartas/png-cartas/5_of_diamonds.png",
      },
      {
        id: 15,
        valor: "5",
        palo: "hearts",
        valorJuego: 5,
        img: "../assets/cartas/png-cartas/5_of_hearts.png",
      },
      {
        id: 16,
        valor: "5",
        palo: "spades",
        valorJuego: 5,
        img: "../assets/cartas/png-cartas/5_of_spades.png",
      },
      {
        id: 17,
        valor: "6",
        palo: "clubs",
        valorJuego: 6,
        img: "../assets/cartas/png-cartas/6_of_clubs.png",
      },
      {
        id: 18,
        valor: "6",
        palo: "diamonds",
        valorJuego: 6,
        img: "../assets/cartas/png-cartas/6_of_diamonds.png",
      },
      {
        id: 19,
        valor: "6",
        palo: "hearts",
        valorJuego: 6,
        img: "../assets/cartas/png-cartas/6_of_hearts.png",
      },
      {
        id: 20,
        valor: "6",
        palo: "spades",
        valorJuego: 6,
        img: "../assets/cartas/png-cartas/6_of_spades.png",
      },
      {
        id: 21,
        valor: "7",
        palo: "clubs",
        valorJuego: 7,
        img: "../assets/cartas/png-cartas/7_of_clubs.png",
      },
      {
        id: 22,
        valor: "7",
        palo: "diamonds",
        valorJuego: 7,
        img: "../assets/cartas/png-cartas/7_of_diamonds.png",
      },
      {
        id: 23,
        valor: "7",
        palo: "hearts",
        valorJuego: 7,
        img: "../assets/cartas/png-cartas/7_of_hearts.png",
      },
      {
        id: 24,
        valor: "7",
        palo: "spades",
        valorJuego: 7,
        img: "../assets/cartas/png-cartas/7_of_spades.png",
      },
      {
        id: 25,
        valor: "8",
        palo: "clubs",
        valorJuego: 8,
        img: "../assets/cartas/png-cartas/8_of_clubs.png",
      },
      {
        id: 26,
        valor: "8",
        palo: "diamonds",
        valorJuego: 8,
        img: "../assets/cartas/png-cartas/8_of_diamonds.png",
      },
      {
        id: 27,
        valor: "8",
        palo: "hearts",
        valorJuego: 8,
        img: "../assets/cartas/png-cartas/8_of_hearts.png",
      },
      {
        id: 28,
        valor: "8",
        palo: "spades",
        valorJuego: 8,
        img: "../assets/cartas/png-cartas/8_of_spades.png",
      },
      {
        id: 29,
        valor: "9",
        palo: "clubs",
        valorJuego: 9,
        img: "../assets/cartas/png-cartas/9_of_clubs.png",
      },
      {
        id: 30,
        valor: "9",
        palo: "diamonds",
        valorJuego: 9,
        img: "../assets/cartas/png-cartas/9_of_diamonds.png",
      },
      {
        id: 31,
        valor: "9",
        palo: "hearts",
        valorJuego: 9,
        img: "../assets/cartas/png-cartas/9_of_hearts.png",
      },
      {
        id: 32,
        valor: "9",
        palo: "spades",
        valorJuego: 9,
        img: "../assets/cartas/png-cartas/9_of_spades.png",
      },
      {
        id: 33,
        valor: "10",
        palo: "clubs",
        valorJuego: 10,
        img: "../assets/cartas/png-cartas/10_of_clubs.png",
      },
      {
        id: 34,
        valor: "10",
        palo: "diamonds",
        valorJuego: 10,
        img: "../assets/cartas/png-cartas/10_of_diamonds.png",
      },
      {
        id: 35,
        valor: "10",
        palo: "hearts",
        valorJuego: 10,
        img: "../assets/cartas/png-cartas/10_of_hearts.png",
      },
      {
        id: 36,
        valor: "10",
        palo: "spades",
        valorJuego: 10,
        img: "../assets/cartas/png-cartas/10_of_spades.png",
      },
      {
        id: 37,
        valor: "as",
        palo: "clubs",
        valorJuego: 11,
        img: "../assets/cartas/png-cartas/ace_of_clubs.png",
      },
      {
        id: 38,
        valor: "as",
        palo: "diamonds",
        valorJuego: 11,
        img: "../assets/cartas/png-cartas/ace_of_diamonds.png",
      },
      {
        id: 39,
        valor: "as",
        palo: "hearts",
        valorJuego: 11,
        img: "../assets/cartas/png-cartas/ace_of_hearts.png",
      },
      {
        id: 40,
        valor: "as",
        palo: "spades",
        valorJuego: 11,
        img: "../assets/cartas/png-cartas/ace_of_spades.png",
      },
      {
        id: 41,
        valor: "j",
        palo: "clubs",
        valorJuego: 10,
        img: "../assets/cartas/png-cartas/jack_of_clubs.png",
      },
      {
        id: 42,
        valor: "j",
        palo: "diamonds",
        valorJuego: 10,
        img: "../assets/cartas/png-cartas/jack_of_diamonds.png",
      },
      {
        id: 43,
        valor: "j",
        palo: "hearts",
        valorJuego: 10,
        img: "../assets/cartas/png-cartas/jack_of_hearts.png",
      },
      {
        id: 44,
        valor: "j",
        palo: "spades",
        valorJuego: 10,
        img: "../assets/cartas/png-cartas/jack_of_spades.png",
      },
      {
        id: 45,
        valor: "k",
        palo: "clubs",
        valorJuego: 10,
        img: "../assets/cartas/png-cartas/king_of_clubs.png",
      },
      {
        id: 46,
        valor: "k",
        palo: "diamonds",
        valorJuego: 10,
        img: "../assets/cartas/png-cartas/king_of_diamonds.png",
      },
      {
        id: 47,
        valor: "k",
        palo: "hearts",
        valorJuego: 10,
        img: "../assets/cartas/png-cartas/king_of_hearts.png",
      },
      {
        id: 48,
        valor: "k",
        palo: "spades",
        valorJuego: 10,
        img: "../assets/cartas/png-cartas/king_of_spades.png",
      },
      {
        id: 49,
        valor: "q",
        palo: "clubs",
        valorJuego: 10,
        img: "../assets/cartas/png-cartas/queen_of_clubs.png",
      },
      {
        id: 50,
        valor: "q",
        palo: "diamonds",
        valorJuego: 10,
        img: "../assets/cartas/png-cartas/queen_of_diamonds.png",
      },
      {
        id: 51,
        valor: "q",
        palo: "hearts",
        valorJuego: 10,
        img: "../assets/cartas/png-cartas/queen_of_hearts.png",
      },
      {
        id: 52,
        valor: "q",
        palo: "spades",
        valorJuego: 10,
        img: "../assets/cartas/png-cartas/queen_of_spades.png",
      },
    ],
  });
});

app.get("/suma/:num1/:num2", (req, res) => {
  let valor1 = Number(req.params.num1);
  let valor2 = Number(req.params.num2);

  //console.log(typeof req.params.num1);

  res.json({ resultado: valor1 + valor2 });
});

//utilización de queries: consultas

app.get("/prueba", (req, res) => {
  let id = req.query.id;
  let nombre = req.query.nombre;
  let apellido = req.query.apellido;

  res.json({
    id: id,
    nombre: nombre,
    apellido: apellido,
  });
});

//queries y parámetros mezclados

app.get("/alumno1/:clase/:turno", (req, res) => {
  let id = req.query.id;
  let nombre = req.query.nombre;
  let apellido = req.query.apellido;

  res.json({
    id: id,
    nombre: nombre,
    apellido: apellido,
    clase: req.params.clase,
    turno: req.params.turno,
  });
});

//Crear una ruta que reciba nombre y apellido por medio de params
// (ruta parametrizada) y devuelva por un res.send
// un query string armando un saludo (ej: res.send(`Hola ${nombre}`) ).

app.get("/saludo/:nombre/:apellido", (req, res) => {
  res.send(`Hola, ${req.params.nombre} ${req.params.apellido}`);
});

// Crear una ruta que reciba un numero (ruta con query)
// si el número es impar debe devolver un res.send("no autorizado") ,
// y si el número es par debe devolver res.send("autorizado").

app.get("/autorizacion", (req, res) => {
  const numero = Number(req.query.numero);
  if (isNaN(numero)) {
    res.send("Ingrese un valor numérico.");
  } else if (numero % 2 !== 0) {
    res.send(`No autorizado. N° ingresado: ${numero}`);
  } else {
    res.send(`Autorizado. N° ingresado: ${numero}`);
  }
});
