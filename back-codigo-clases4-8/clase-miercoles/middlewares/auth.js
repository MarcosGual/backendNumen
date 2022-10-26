module.exports = (req, res, next) => {
  if (!req.session.user) {
    res.json({ mensaje: "Por favor inicie una sesión" });
  } else {
    next();
  }
};
