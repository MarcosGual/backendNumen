const {Producto} = require("../models/producto");

const obtenerProductos = async (req, res) => {
  const productos=await Producto.find();
  res.json({productos});
};

const cargarProducto=async(req,res)=>{
  const producto=new Producto(req.body);
  await producto.save();
  res.status(201).json(producto);
}

module.exports = { obtenerProductos, cargarProducto };