const { User } = require("../models/User");
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: "Ok", users });
  } catch (error) {
    res.status(500).json({ message: "No se pudieron obtener los usuarios." });
  }
};

const registerUser = async (req, res) => {
  try {
    // const newUser = await User.create(req.body);

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const newUser = { ...req.body, password: hashedPassword };

    const savedUser = await User.create(newUser);

    res.status(201).json({ message: "Ok", savedUser });
  } catch (error) {
    res.status(500).json({ message: "No se pudo crear el usuario." });
  }
};

module.exports = { getUsers, registerUser };
