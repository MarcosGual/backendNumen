const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtValidate = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    res.status(403).json({ msg: "Error: token no proporcionado." });
  } else {
    jwt.verify(token, process.env.JWT_KEY, (error, decoded) => {
      if (error) {
        res.status(401).json({ msg: "Error: token inválido. Acceso denegado." });
      } else {
        req.user = decoded;
        next();
      }
    });
  }
};

module.exports = jwtValidate;