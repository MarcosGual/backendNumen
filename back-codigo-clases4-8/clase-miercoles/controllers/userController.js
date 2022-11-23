const { User } = require("../models/user");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

const registrarUsuario = async (req, res) => {
  try {
    const err = validationResult(req);
    if (err.isEmpty()) {
      let salt = bcrypt.genSaltSync(10);
      let hash = bcrypt.hashSync(req.body.pass, salt);
      const user = {
        name: req.body.name,
        email: req.body.email,
        pass: hash,
        country: req.body.country,
      };
      const nuevoUsuario = new User(user);
      await nuevoUsuario.save();
      res.status(201).json({ nuevoUsuario });
    } else {
      res.status(501).json(err);
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const obtenerUsuarios = async (req, res) => {
  const usuarios = await User.find();
  res.status(200).json({ usuarios });
};

const loginUsuario = async (req, res) => {
  try {
    const usuario = await User.findOne({ name: req.body.name });
    if (usuario === null) {
      res.status(404).json({ msg: "El nombre de usuario no existe " });
    } else {
      console.log(req.body.pass, usuario.pass)
      bcrypt.compare(req.body.pass, usuario.pass).then((validPass) => {
        if (validPass) {
          const user = {
            _id: usuario._id,
            name: usuario.name,
          };
          req.session.user = user;

          if (req.body.remember) {
            res.cookie("sesionUsuario", req.session.user, {
              maxAge: 60000 * 60 * 24,
            });
          }
          res
            .status(200)
            .json({ msg: "Usuario logueado exitosamente", usuario: user });
        } else {
          res.status(401).json({ msg: "La contraseña es incorrecta" });
        }
      });
    }
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
};

const logoutUsuario = async (req, res) => {
  res.clearCookie("sesionUsuario");
  req.session.destroy();
  res.status(200).json({ msg: "Usuario fuera de sesión" });
};

module.exports = { registrarUsuario, obtenerUsuarios, loginUsuario, logoutUsuario };
