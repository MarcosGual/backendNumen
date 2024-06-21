const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { default: axios } = require("axios");
require("dotenv").config();

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find(); //trae TODAS las tareas de la colección
    res.status(200).json({ users: allUsers, msg: "Ok" });
  } catch (e) {
    res
      .status(500)
      .json({ users: [], msg: "Error en el servidor - " + e.message });
  }
};

const getAllJPHUsers = async (req, res) => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    res.status(200).json({ users: data, msg: "Ok" });
  } catch (error) {
    res.status(502).json({ users: [], msg: "Bad Gateway - " + e.message });
  }
};

const createUser = async (req, res) => {
  try {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(10);

    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const newUser = { ...req.body, password: hashedPassword };

    const user = await User.create(newUser); //creamos una nueva tarea en la base de datos

    res.status(201).json({ user, msg: "Usuario agregado exitosamente." });
  } catch (e) {
    res
      .status(500)
      .json({ msg: "Error al cargar la nueva tarea - " + e.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const usuario = await User.findOne({ username: req.body.username });

    if (!usuario) {
      res
        .status(404)
        .json({ user: null, msg: "Usuario y/o contraseña incorrectos." });
    } else {
      const verificacion = bcrypt.compareSync(
        req.body.password,
        usuario.password
      );
      if (!verificacion) {
        res
          .status(400)
          .json({ user: null, msg: "Usuario y/o contraseña incorrectos." });
      } else {
        const user = { username: usuario.username, email: usuario.email };
        // req.session.user = user;

        const token = jwt.sign(
          user,
          process.env.JWT_KEY,
          { expiresIn: 60 }
        );
        res.status(200).json({ token: token, msg: "Ok" });
      }
    }
  } catch (error) {
    console.log("Error al loguear usuario - ", error);
    res
      .status(500)
      .json({ user: null, msg: "Error en el login - " + error.message });
  }
};

const createSession = async (req, res) => {
  try {
    const usuario = {
      username: "marcos11",
      email: "marcos@outlook.com",
      idioma: "español",
      temaPreferido: "claro",
    };

    req.session.user = usuario;
    console.log('creando cookie')
    res.cookie("authenticated", true, { maxAge: 1000 * 30 });

    res.json(req.session.user);
  } catch (error) {
    console.log("Error al iniciar sesión", error);
    res.json({ msg: "Error al iniciar sesión - " + error.message });
  }
};

const getSessionInfo = async (req, res) => {
  try {
    res.json({sessionInfo: req.session, authenticated: req.cookies.authenticated});
  } catch (error) {
    console.log("Error al obtener datos de la sesión.", error);
    res.json({ msg: "Error al obtener datos de la sesión - " + error.message });
  }
};

const closeSession = async (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie("authenticated");
    res.json({ msg: "La sesión ha sido cerrada" });
  } catch (error) {
    console.log("Error al cerrar la sesión.", error);
    res.json({ msg: "Error al cerrar la sesión - " + error.message });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  loginUser,
  getAllJPHUsers,
  createSession,
  getSessionInfo,
  closeSession,
};
