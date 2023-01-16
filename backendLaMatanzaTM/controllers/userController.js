const User = require("../models/User");
const { validationResult } = require("express-validator");

const obtenerUsuarios = async (req, res) => {
  // res.status(200).json(db);
  try {
    const usuarios = await User.find();
    res.status(200).json({
      usuarios: usuarios,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      usuarios: null,
      error: "No se han podido obtener los usuarios - " + error.message,
    });
  }
};

const obtenerUsuarioxId = async (req, res) => {
  try {
    const usuario = await User.findById(req.params.id);
    res.status(200).json({
      usuario: usuario,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      usuario: null,
      error: "No se ha podido obtener el usuario - " + error.message,
    });
  }
};

const obtenerUsuarioxNombre = async (req, res) => {
  console.log(req.query.username);
  try {
    const usuario = await User.findOne({ username: req.query.username });
    if (usuario) {
      res.status(200).json({
        usuario: usuario,
        error: null,
      });
    } else {
      res.status(404).json({
        usuario: usuario,
        error: "No se ha encontrado ese nombre de usuario",
      });
    }
  } catch (error) {
    res.status(500).json({
      usuario: null,
      error: "No se ha podido obtener el usuario - " + error.message,
    });
  }
};

const obtenerStatusUsuario = (req, res) => {
  const id = Number(req.params.id);
  const status = id % 2 === 0 ? "activo" : "inactivo";

  res.status(200).json({ userId: id, status: status });
};

const registrarUsuario = async (req, res) => {
  try {
    const error = validationResult(req);
    if (error.isEmpty()) {
      const usuario = new User(req.body);
      await usuario.save();
      res.status(201).json({
        msg: "El usuario ha sido registrado exitosamente",
        username: usuario.username,
        error: null,
      });
    } else {
      res.status(400).json({
        msg: "Error al registrar usuario",
        username: null,
        error: error.errors,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Error al registrar usuario - " + error.message,
      username: null,
      error: error,
    });
  }
};

const editarUsuario = async (req, res) => {
  try {
    const usuario = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({
      msg: "El usuario ha sido actualizado exitosamente",
      username: usuario.username,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al actualizar el usuario - " + error.message,
      username: null,
      error: error,
    });
  }
};

const eliminarUsuario = async (req, res) => {
  try {
    const usuario = await User.findByIdAndDelete(req.params.id);
    res.status(201).json({
      msg: "El usuario ha sido eliminado exitosamente",
      username: usuario.username,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al eliminar el usuario - " + error.message,
      username: null,
      error: error,
    });
  }
};

module.exports = {
  obtenerUsuarios,
  obtenerStatusUsuario,
  obtenerUsuarioxId,
  registrarUsuario,
  obtenerUsuarioxNombre,
  editarUsuario,
  eliminarUsuario,
};
