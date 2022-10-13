const { Producto } = require("../models/producto");

const validarId = async (req, res, next) => {
  const item = await Producto.findById(req.params.id);
  if (item !== null) {
    next();
  } else {
    res.status(500).json({ msg: "ID no encontrado..." });
  }
};

module.exports = { validarId };