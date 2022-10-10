const { Gato } = require("../models/gato");

const validarId = async (req, res, next) => {
  const item = await Gato.findById(req.params.id);
  if (item !== null) {
    next();
  } else {
    res.status(500).json({ msg: "ID no encontrado..." });
  }
};

module.exports = { validarId };