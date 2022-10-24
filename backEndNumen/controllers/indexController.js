const indexController = (req, res) => {
  res.send("Bienvenidos a la ruta índice!");
};

const crearSession = async (req, res) => {
  let usuario = {
    nombre: "marcos",
    email: "marcos@gmail.com",
    clave: "marcos123",
  };

  req.session.usuario = usuario;

  res.json(req.session.usuario);
};

const verSession = async (req, res) => {
  res.json(req.session);
};

const cerrarSession = async (req, res) => {
  req.session.destroy();
  res.json({ mensaje: "La sesión ha sido cerrada..." });
};

module.exports = { indexController, crearSession, verSession, cerrarSession };
