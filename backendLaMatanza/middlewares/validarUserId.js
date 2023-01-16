const { User } = require("../models/User");

const validarUserId = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (user) {
    next();
  } else {
    res
      .status(500)
      .json({ statusCode: 500, error: `User ID no encontrado...` });
  }
};

module.exports = validarUserId;
