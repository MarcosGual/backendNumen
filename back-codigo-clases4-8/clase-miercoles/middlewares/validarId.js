const { Producto } = require("../models/producto");

const validarId = async (req, res, next) => {
  const item = await Producto.findById(req.params.id);
  if (item) {
    next();
  } else {
    res.status(404).json({ msg: "ID no encontrado..." });
  }
};

module.exports = { validarId };