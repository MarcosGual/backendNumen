const obtenerProductos = (req, res) => {
  res.json([
    {
      id: 100,
      descripcion: "Harina",
      marca: "La Favorita",
      precio: 100,
    },
    {
      id: 101,
      descripcion: "Leche",
      marca: "La Serenísima",
      precio: 160,
    },
    {
      id: 102,
      descripcion: "Pan",
      marca: null,
      precio: 200,
    },
  ]);
};

module.exports = { obtenerProductos };