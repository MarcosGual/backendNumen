const User = require("../models/User");

const validarUsername = async (req, res, next) => {
  const user = await User.find({ username: req.body.username });

  if (user) {
    res.status(400).json({
      msg: "Usuario ya registrado",
    });
  } else {
    next();
  }
};

module.exports = validarUsername;
