const obtenerUsuarios = (req, res) => {
  res.send([
    {
      id: 1,
      nombre: "Alejandro",
      mail: "alejandro@gmail.com",
    },
    {
      id: 2,
      nombre: "Fabiana",
      mail: "fabiana@hotmail.com",
    },
  ]);
};

module.exports = { obtenerUsuarios };
