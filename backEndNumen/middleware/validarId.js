const { Gato } = require("../models/gato");

const validarId = async (req, res, next) => {
  const item = await Gato.findById(req.params.id);
  if (item) {
    next();
  } else {
    res.status(404).json({ msg: "ID no encontrado..." });
  }
};

module.exports = { validarId };