const { Producto } = require("../models/producto");

const cargarProducto = async (body) => {
  try {
    console.log(body);
    const producto = new Producto(body);
    await producto.save();

    return true;
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

module.exports = { cargarProducto };
