const { validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { default: axios } = require("axios");

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

  try {
    const usuariosJPH = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    res.status(200).json({ usuarios: usuariosJPH.data, msg: "Ok" });
  } catch (error) {
    res.status(500).json({
      msg: "Error",
      error: error.message,
    });
  }
};

const postUser = async (req, res) => {
  try {
    const validationError = validationResult(req);

    if (validationError.isEmpty()) {
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

module.exports = {
  getUsers,
  getUserById,
  getUserByName,
  getUsersJPH,
  postUser,
  putUser,
  deleteUser,
};
