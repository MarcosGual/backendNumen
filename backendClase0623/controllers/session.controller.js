const getSessionViews = (req, res) => {
  const views = req.session.views
    ? ++req.session.views
    : (req.session.views = 1);

  res.send(
    `<h4>Usted ha visitado la página ${req.session.views} veces...</h4>`
  );
};

const createUserSession = async (req, res) => {
  const user = {
    username: "juancito10",
    email: "juancito123@gmail.com",
    country: "Argentina",
  };

  req.session.user = user;

  res.cookie("user", user.username, { maxAge: 60 * 1000 });

  res.send(req.session.user);
};

const getUserSession = (req, res) => {
  if (req.session.user) {
    res.send(
      `<h4>Bienvenido usuari@ ${req.session.user.username} de ${req.session.user.country}.</h4>`
    );
  } else {
    res.send(`<h4>No está autorizado para ver esta página.</h4>`);
  }
};

const getUserCookie = (req, res) => {
  if (req.cookies.user) {
    res.json({ valor: req.cookies.user });
  } else {
    res.json({ valor: "No hay cookie de usuario" });
  }
};

const deleteCookie = (req, res) => {
  res.clearCookie("user");
  res.json({ message: "Cookie eliminada" })
};

const closeSession = (req, res) => {
  req.session.destroy();
  res.send("Sesión cerrada");
};

module.exports = {
  getSessionViews,
  createUserSession,
  getUserSession,
  getUserCookie,
  deleteCookie,
  closeSession,
};
