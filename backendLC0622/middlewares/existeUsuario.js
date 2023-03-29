const User = require("../models/User");

const existeUsuario = async (req, res, next) => {
  console.log(req.body.email);
  const user = await User.findOne({ email: req.body.email });
  console.log(user);
  if (user) {
    res.status(400).json({ msg: "El e-mail ya existe en nuestros registros" });
  } else {
    next();
  }
};

module.exports = existeUsuario;
