const jwt = require("jsonwebtoken");
require("dotenv").config();

generateAccessToken = (username) => {
  return jwt.sign({username: username}, process.env.TOKEN_SECRET, { expiresIn: 60 * 5 });
};

module.exports = generateAccessToken;
