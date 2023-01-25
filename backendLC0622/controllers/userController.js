const User = require("../models/User");

const getUsers = async (req, res) => {
  const users = await User.find();

  res.status(200).json({ users, msg: "Ok" });
};

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

const getUserByName = (req, res) => {
  console.log(req.params.id);
  const user = db.find((usuario) => usuario.username == req.query.username);

  if (user !== undefined && user !== null) {
    res.status(200).json({ user: user, msg: "Ok" });
  } else {
    res
      .status(404)
      .json({ user: null, msg: "El nombre de usuario no ha sido encontrado" });
  }
};

const postUser = async (req, res) => {
  

  try {
    const user = new User(req.body);
    await user.save();

    res.status(201).json({
      user: user.username,
      msg: "El usuario ha sido creado exitosamente",
    });
  } catch (error) {
    res.status(500).json({
      user: null,
      msg: "Hubo un error al crear el usuario - " + error.message,
    });
  }
};

module.exports = { getUsers, getUserById, getUserByName, postUser };
