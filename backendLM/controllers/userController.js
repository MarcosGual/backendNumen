const { User } = require("../models/User");
const { validationResult } = require("express-validator");
const { default: axios } = require("axios");
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ usuarios: users, statusCode: 200, error: null });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      error: `Error: ${error.message}`,
    });
  }
};

const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).json(user);
};

const getUsersJPH = async (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users/" + req.params.id, {
      headers: { "Accept-Encoding": "gzip, deflate, compress" },
    })
    .then((respuesta) =>
      res
        .status(200)
        .json({ usuarios: respuesta.data, statusCode: 200, error: null })
    )
    .catch((error) => console.log(error.message));
};

//post user: crear nuevo usuario (registro de usuario)
const postUser = async (req, res) => {
  try {
    const error = validationResult(req);

    if (error.isEmpty) {
      let salt = bcrypt.genSaltSync(10);
      let hash = bcrypt.hashSync(req.body.password, salt);

      const user = new User({
        username: req.body.username,
        password: hash,
        email: req.body.email,
      });

      await user.save();

      res
        .status(201)
        .json({ username: user.username, statusCode: 201, error: null });
    } else {
      res.status(500).json({ statusCode: 500, error: error });
    }
  } catch (error) {
    res
      .status(500)
      .json({ statusCode: 500, error: `Error del servidor: ${error.message}` });
  }
};

const editUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      msj: `Usuario de Id ${req.params.id} actualizado...`,
      statusCode: 200,
      error: null,
    });
  } catch (error) {
    res
      .status(500)
      .json({ statusCode: 500, error: `Error del servidor: ${error.message}` });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      msj: `Usuario ${user.username} eliminado...`,
      statusCode: 200,
      error: null,
    });
  } catch (error) {
    res
      .status(500)
      .json({ statusCode: 500, error: `Error del servidor: ${error.message}` });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (user) {
      console.log(req.body.password, user.password);

      const verificacion = await bcrypt.compare(
        req.body.password,
        user.password
      );

      console.log(verificacion);

      if (verificacion) {
        const usuario = {
          _id: user._id,
          username: user.username,
        };

        req.session.user = usuario;

        if (req.body.remember) {
          res.cookie("userSession", req.session.user, {
            maxAge: 60000 * 60 * 24 * 7,
          });
        }

        res.status(201).json({
          msg: "El usuario ha ingresado correctamente al sistema...",
          username: usuario.username,
          statusCode: 201,
          error: null,
        });
      } else {
        res.json({ msg: "La clave es errónea..." });
      }
    }
  } catch (error) {
    res
      .status(501)
      .json({ statusCode: 500, error: `Error del servidor: ${error.message}` });
  }
};

const logoutUser = async (req, res) => {
  res.clearCookie("userSession");
  //res.session.destroy();

  res.status(200).json({
    msg: "El usuario ha salido correctamente del sistema...",
    statusCode: 200,
    error: null,
  });
};

module.exports = {
  getUsers,
  postUser,
  getUserById,
  editUser,
  deleteUser,
  getUsersJPH,
  loginUser,
  logoutUser,
};
