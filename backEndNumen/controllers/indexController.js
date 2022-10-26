const indexController = (req, res) => {
  res.send("Bienvenidos a la ruta índice!");
};

const crearSession = async (req, res) => {
  let usuario = {
    name: "marcos",
    email: "marcos@gmail.com",
    pass: "marcos123",
    country: "Argentina",
  };

  res.cookie("personaEnSesion", usuario.country, {
    maxAge: 60000 * 60 * 24,
  });

  req.session.user = usuario;

  res.json(req.session.user);
};

const verCookie = async (req, res) => {
  res.json({ valor: req.cookies.personaEnSesion });
};

const eliminarCookie = async (req, res) => {
  res.clearCookie("personaEnSesion");
  res.json("Cookie eliminada exitosamente");
};

const verSession = async (req, res) => {
  res.json(req.session);
};

const cerrarSession = async (req, res) => {
  req.session.destroy();
  res.json({ mensaje: "La sesión ha sido cerrada..." });
};

module.exports = {
  indexController,
  crearSession,
  verSession,
  cerrarSession,
  verCookie,
  eliminarCookie,
};
