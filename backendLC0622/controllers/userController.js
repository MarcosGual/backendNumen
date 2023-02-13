const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const User = require("../models/User");

//lista de usuarios (READ)
const getUsers = async (req, res) => {
  const users = await User.find();

  res.status(200).json({ users, msg: "Ok" });
};

//obtener un usuario x ID
const getUserById = async (req, res) => {
  //console.log(req.params.id);
  //const user = db.find((usuario) => usuario.id == req.params.id);

  const user = await User.findById(req.params.id);

  if (user !== undefined && user !== null) {
    res.status(200).json({ user: user, msg: "Ok" });
  } else {
    res
      .status(404)
      .json({ user: null, msg: "El usuario no ha sido encontrado" });
  }
};

//obtener un usuario por nombre de usuario
const getUserByName = async (req, res) => {
  const user = await User.findOne({ username: req.query.user });
  console.log(user);

  if (user !== undefined && user !== null) {
    res.status(200).json({ user, msg: "Ok" });
  } else {
    res
      .status(404)
      .json({ user: null, msg: "El nombre de usuario no ha sido encontrado" });
  }
};

//crear un usuario nuevo (CREATE)
const postUser = async (req, res) => {
  try {
    const validationError = validationResult(req);

    if (validationError.isEmpty()) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);

      const usuarioEncriptado = {
        username: req.body.username,
        password: hash,
        email: req.body.email,
      };

      const user = new User(usuarioEncriptado);
      await user.save();

      res.status(201).json({
        user: user.username,
        msg: "El usuario ha sido creado exitosamente",
      });
    } else {
      res.status(400).json({
        msg: "Error en el registro del usuario",
        error: validationError.errors,
      });
    }
  } catch (error) {
    res.status(500).json({
      user: null,
      msg: "Hubo un error al crear el usuario - " + error.message,
    });
  }
};

//actualizar usuario (UPDATE)
const updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({ msg: "Usuario actualizado" });
  } catch (error) {
    res.status(500).json({ msg: "Error al actualizar - " + error.message });
  }
};

//eliminar usuario (DELETE)
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Usuario eliminado" });
  } catch (error) {
    res.status(500).json({ msg: "Error al eliminar - " + error.message });
  }
};

module.exports = {
  getUsers,
  getUserById,
  getUserByName,
  postUser,
  updateUser,
  deleteUser,
};
