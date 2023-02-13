const User = require("../models/User");
const bcrypt = require("bcrypt");
const { default: axios } = require("axios");
const { validationResult } = require("express-validator");

const getUsers = async (req, res) => {
  const usuarios = await User.find();
  res.status(200).json(usuarios);
};

const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({ user, msg: "Ok" });
};

const getUserByName = async (req, res) => {
  const user = await User.findOne({ username: req.query.user });

  res.status(200).json({ user, msg: "Ok" });
};

const getUsersJPH = async (req, res) => {
  // const usuariosJPH = await axios.get(
  //   "https://jsonplaceholder.typicode.com/users"
  // );

  console.log(req.query.lat, req.query.long);

  try {
    const clima = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${req.query.lat}&lon=${req.query.long}&appid=5709b5854d1e8c2b500996ede3582e45`
    );
    res.status(200).json({ usuarios: clima.data.city, msg: "Ok" });
  } catch (error) {
    res.status(500).json({
      msg: "Error",
      error: error.message,
    });
  }
};

//registro de usuario
const postUser = async (req, res) => {
  try {
    const validationError = validationResult(req);
    //si falta el email-->cheee, falta el email!! fijate
    //si no falta nada--> nada

    if (validationError.isEmpty()) {
      //si no falta nada, hago lo que está entre llaves
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);

      const hashedUser = {
        username: req.body.username,
        password: hash,
        email: req.body.email,
      };

      const user = new User(hashedUser);
      await user.save();

      res.status(201).json({ username: user.username, msg: "Ok", error: null });
    } else {
      res.status(400).json({
        username: null,
        msg: "Los datos son incorrectos",
        error: validationError.errors,
      });
    }
  } catch (error) {
    res.status(500).json({
      username: req.body.username,
      msg: "Error",
      error: error.message,
    });
  }
};

const putUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);

    if (user) {
      res.status(200).json({
        username: req.body.username,
        msg: "El usuario ha sido actualizado correctamente",
      });
    } else {
      res.status(404).json({
        username: null,
        msg: "El id no es válido",
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ username: req.body.username, msg: "Error - " + error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (user) {
      res.status(200).json({
        username: req.body.username,
        msg: "El usuario ha sido eliminado correctamente",
      });
    } else {
      res.status(404).json({
        username: null,
        msg: "El id no es válido",
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ username: req.body.username, msg: "Error - " + error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const err = validationResult(req);
    if (err.isEmpty()) {
      const user = await User.findOne({ username: req.body.username });
      if (user) {
        const loginValido = await bcrypt.compareSync(
          req.body.password,
          user.password
        );
        if (loginValido) {
          const sessionUser = {
            _id: user._id,
            username: user.username,
          };

          req.session.user = sessionUser;

          if (req.body.remember) {
            res.cookie("userSession", req.session.user, {
              maxAge: 60000 * 60 * 24 * 30,
            });
          }

          res.status(200).json({ msg: "Usuario logueado correctamente" });
        } else {
          res.status(400).json({ msg: "Error de usuario o contraseña" });
        }
      }
    } else {
      res
        .status(400)
        .json({ msg: "Error de usuario o contraseña", error: err.errors });
    }
  } catch (error) {
    res.status(500).json({ msg: `Error al loguearse - ${error.message}` });
  }
};

const logoutUser = async (req, res) => {
  res.clearCookie("userSession");
  req.session.destroy();
  res.status(200).json({ msg: "Usuario fuera de sesión" });
};

module.exports = {
  getUsers,
  getUserById,
  getUserByName,
  getUsersJPH,
  postUser,
  putUser,
  deleteUser,
  loginUser,
  logoutUser,
};
