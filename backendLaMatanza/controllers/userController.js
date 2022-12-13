const { User } = require("../models/User");

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

const postUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    res
      .status(201)
      .json({ username: user.username, statusCode: 201, error: null });
  } catch (error) {
    res
      .status(500)
      .json({ statusCode: 500, error: `Error del servidor: ${error.message}` });
  }
};

module.exports = { getUsers, postUser, getUserById };
