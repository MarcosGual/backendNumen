const User = require("../models/User");

const validarUserName = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.username });

  if (user) {
    res.status(400).json({ msg: "El usuario ya existe en nuestros registros" });
  } else {
    next()
    }
};

module.exports = validarUserName;
