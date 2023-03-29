const createSession = async (req, res) => {
  let user = {
    username: "marcos",
    password: "marcos123",
    email: "marcos@gmail.com",
  };

  res.cookie("personaEnSesion", user.username, { maxAge: 60000 * 60 * 24 });

  req.session.user = user;

  res.status(200).json(req.session.user);
};

const verCookie = (req, res) => {
  res.json({ valor: req.cookies.personaEnSesion });
};

const eliminarCookie = (req, res) => {
  res.clearCookie("personaEnSesion");
  res.json({ msg: "La cookie ha sido eliminada exitosamente" });
};

module.exports = { createSession, verCookie, eliminarCookie};
