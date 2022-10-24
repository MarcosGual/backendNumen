module.exports = (req, res, next) => {
  if (!req.session.usuario) {
    res.json({ mensaje: "Por favor inicie una sesión" });
  } else {
    next();
  }
};
