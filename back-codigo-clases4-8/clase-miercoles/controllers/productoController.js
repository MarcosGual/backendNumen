const { Producto } = require("../models/producto");
const { validationResult } = require("express-validator");

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
    const error = validationResult(req);
    if (error.isEmpty) {
      const producto = await Producto.findById(req.params.id);
      res.status(200).json({ producto });
    } else {
      res.status(501).json({ msj: error });
    }
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

const editarProducto = async (req, res) => {
  try {
    const error = validationResult(req);
    if (error.isEmpty()) {
      await Producto.findByIdAndUpdate(req.params.id, req.body);
      res.status(201).json({ msg: "Producto actualizado" });
    } else {
      res.status(501).json({ msg: error }); //error de la validación
    }
  } catch (error) {
    console.log(error.message); //error de la base de datos (conexión)
  }
};

const eliminarProducto = async (req, res) => {
  try {
    const producto = await Producto.findByIdAndDelete(req.params.id);
    res.json({ msg: "Producto eliminado", producto });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  obtenerProductos,
  obtenerProductoPorId,
  cargarProducto,
  editarProducto,
  eliminarProducto
};
