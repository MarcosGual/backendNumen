const jwt = require("jsonwebtoken");

const jwtValidate = (req, res, next) => {
  const token = req.headers["authorization"];
  console.log(token)

  if (!token) {
    res.status(401).json({ message: "Acceso denegado" });
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: "Token inválido" });
      } else {
        req.user = decoded;
        // console.log('pasó', decoded)
        next(); //que vaya al controller
      }
    });
  }
};

module.exports = jwtValidate;