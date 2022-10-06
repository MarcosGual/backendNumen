const { Producto } = require("../models/Producto");

const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json({ productos });
  } catch (error) {
    console.log(error.message);
  }
};

const obtenerProductoPorId = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    res.status(200).json({ producto });
  } catch (error) {
    console.log(error.message);
  }
};

const cargarProducto = async (req, res) => {
  try {
    const producto = new Producto(req.body);
    await producto.save();
    res.status(201).json({
      msg: "El producto ha sido guardado exitosamente.",
      producto: producto,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { obtenerProductos, obtenerProductoPorId, cargarProducto };
