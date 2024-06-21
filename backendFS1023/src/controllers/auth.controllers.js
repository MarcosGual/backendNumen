const authServices = require("../services/authService");
const { username, email } = require("../utils/validators");

exports.loginUser = async (req, res) => {
  try {
    const token = await authServices.authLogin(
      req.body.email,
      req.body.password
    );

    if (!token) {
      res
        .status(401)
        .json({ message: "Error en la autenticación. Acceso denegado." });
    } else {
      res.cookie("authToken", token, { httpOnly: true, secure: false });
      res
        .status(200)
        .json({ message: "Usuario logueado exitosamente.", token: token });
    }
  } catch (error) {
    console.log("Error al iniciar sesión - " + error.message);
    res.status(500).json({ message: "Error al iniciar sesión." });
  }
};

exports.createSession = (req, res) => {
  try {
    const user = {
      username: "pepito22",
      email: "pepito@gmail.com",
      language: "ES",
      preferredTheme: "dark",
    };

    req.session.user = user;
    // console.log('creando cookie de sesión...')
    res.cookie("userInSession", user.username, { maxAge: 1000 * 60 });
    res.status(200).json({ message: "Sesión iniciada." });
  } catch (error) {
    console.log("Error al crear sesión - " + error.message);
    res.status(500).json({ message: "Error al iniciar sesión." });
  }
};

exports.getUserInSession = (req, res) => {
  if (!req.cookies.userInSession) {
    res
      .status(401)
      .json({ message: "No se ha iniciado sesión. No autorizado." });
  } else {
    res.status(200).json({
      message: `El usuario en sesion es ${req.cookies.userInSession}`,
    });
  }
};

exports.sessionCounter = (req, res) => {
  try {
    if (!req.session.user) {
      res.send(`<h4>Bienvenido! Tiene que iniciar sesión...</h4>`);
    } else {
      req.session.count = req.session.count ? ++req.session.count : 1;
      res.send(
        `<h4>Bienvenido, ${req.session.user.username}! Visitaste esta página ${req.session.count} veces...</h4>`
      );
    }
  } catch (error) {
    res.status(500).json({ message: "Error al contar" });
  }
};

exports.closeSession = (req, res) => {
  try {
    req.session.destroy();
    if (req.cookies.userInSession) clearCookie("userInSession");
    res.send(`<h4>Sesión cerrada correctamente.</h4>`);
  } catch (error) {
    console.log("Error al crear sesión - " + error.message);
    res.status(500).json({ message: "Error al cerrar sesión." });
  }
};
