const generateAccessToken = require("../utils/newToken");

const generarCrypto = (req, res) => {
  const numeroCrypto = require("crypto").randomBytes(64).toString("hex");
  res
    .status(200)
    .json({ msg: "Número generado exitosamente", cryptoNumber: numeroCrypto });
};

const crearSesion = async (req, res) => {
  let usuario = {
    name: "marcos",
    email: "marcos@gmail.com",
    country: "Argentina",
  };

  console.log(usuario);

  const token = generateAccessToken(usuario.name);

  res.cookie("personaEnSesion", usuario.country, {
    maxAge: 60000,
  });

  req.session.user = usuario;

  res.status(200).json({ msg: "Inicio de sesión correcto", jwtToken: token });
};

const verCookie = (req, res) => {
  res.json({ valor: req.cookies.personaEnSesion });
};

const eliminarCookie = (req, res) => {
  res.clearCookie("personaEnSesion");
  res.json({ msg: "La cookie ha sido eliminada exitosamente" });
};

const eliminarSesion = (req, res) => {
  req.session.destroy();
  res.status(200).json({ msg: "La sesión ha sido cerrada exitosamente" });
};

module.exports = {
  crearSesion,
  verCookie,
  eliminarCookie,
  eliminarSesion,
  generarCrypto,
};
