const { User } = require("../models/User");
const { validationResult } = require("express-validator");
const { default: axios } = require("axios");

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

const postUser = async (req, res) => {
  try {
    const error = validationResult(req);

    if (error.isEmpty) {
      const user = new User(req.body);
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

module.exports = {
  getUsers,
  postUser,
  getUserById,
  editUser,
  deleteUser,
  getUsersJPH,
};
