const { User } = require("../models/User");

const validarUserName = async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username });
  if (user) {
    res
      .status(500)
      .json({
        statusCode: 500,
        error: `El nombre de usuario ya existe en nuestra base de datos...`,
      });
  } else {
    next();
  }
};

module.exports = validarUserName;
