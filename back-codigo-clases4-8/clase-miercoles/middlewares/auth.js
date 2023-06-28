module.exports = (req, res, next) => {
  if (!req.session.user) {
    res.status(400).json({ msg: "Por favor inicie una sesión" });
  } else {
    next();
  }
};
