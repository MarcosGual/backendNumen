const { validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const crearSesion = async (req, res) => {
  let user = {
    username: "marcos",
    password: "marcos123",
    email: "marcos.gual@outlook.com",
  };

  res.cookie("personaEnSesion", user.username, { maxAge: 20000 });

  req.session.user = user;

  res.json({ usuario: req.session.user, msg: "Sesión creada" });
};

const verSession = async (req, res) => {
  res.json({ session: req.session, msg: null });
};

const cerrarSession = async (req, res) => {
  req.session.destroy();
  res.json({ session: req.session, msg: "Sesión cerrada" });
};

const verCookie = async (req, res) => {
  res.json({ valor: req.cookies.personaEnSesion, msg: null });
};

const eliminarCookie = async (req, res) => {
  res.clearCookie("personaEnSesion");
  res.json({
    infoCookie: req.cookies.personaEnSesion,
    msg: "Cookie eliminada exitosamente",
  });
};

const logIn = async (req, res) => {
  const err = validationResult(req);

  if (err.isEmpty()) {
    const usuario = await User.findOne({ username: req.body.username });
    if (!usuario) {
      res.status(401).json({ msg: "El nombre de usuario no existe..." });
    } else {
      const verificacion = await bcrypt.compareSync(
        req.body.password,
        usuario.password
      );
      if (verificacion) {
        const user = {
          _id: usuario._id,
          username: usuario.username,
        };

        req.session.user = user;

        if (req.body.remember) {
          res.cookie("sessionUsuario", req.session.user, {
            maxAge: 60000 * 60 * 24,
          });
        }

        res
          .status(200)
          .json({ msg: "Usuario logueado correctamente", usuario: user });
      } else {
        res.status(401).json({ msg: "Usuario o contraseña incorrectos" });
      }
    }
  } else {
    res.status(400).json({ msg: "Error en la validación", error: err });
  }
};

const logOut = async (req, res) => {
  res.clearCookie("sessionUsuario");
  req.session.destroy();
  res.status(200).json({ msg: "La sesión ha sido cerrada correctamente" });
};

module.exports = {
  crearSesion,
  cerrarSession,
  verSession,
  verCookie,
  eliminarCookie,
  logIn,
  logOut
};
