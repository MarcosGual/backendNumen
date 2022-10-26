const { validationResult } = require("express-validator");
const { User } = require("../models/user");
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

const loginUsuario = async (req, res) => {
  try {
    const err = validationResult(req);
    if (err.isEmpty()) {
      //usuario existe?
      const usuario = await User.findOne({ name: req.body.name });
      if (usuario === null) {
        res
          .status(401)
          .json({ msg: "El nombre de usuario o contraseña son incorrectos" });
      }

      bcrypt
        .compare(req.body.pass, usuario.pass)
        .then((validPass) => {
          // validPass returna true or false
          if (validPass) {
            
            const user = {
              _id: usuario._id,
              name: usuario.name,
            };

            req.session.user = user;

            //checkbox: true o false
            // si está chequeado, guardo la sesión del usuario en una cookie
            if (req.body.remember) {
              res.cookie("sesionUsuario", req.session.user, {
                maxAge: 60000 * 60 * 24,
              });
            }

            res.status(200).json({ msg: "Usuario logueado", usuario: user });
          } else {
            res.status(401).json({
              msg: "El nombre de usuario o contraseña son incorrectos",
            });
          }
        })
        .catch((err) => console.log("error: " + err));
    } else {
      res.status(500).json(err);
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const logoutUsuario = (req, res) => {
  res.clearCookie("sesionUsuario");
  req.session.destroy();
  res.status(200).json({ msg: "Usuario fuera de sesión" });
};

module.exports = { loginUsuario, logoutUsuario, registrarUsuario };
