const { User } = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.authLogin = async (email, password) => {
  const user = await User.findOne({ email: email });

  if (!user) {
    //   res.status(404).json({ message: "Usuario no encontrado." });
    throw new Error('Usuario no encontrado!');
  } else {
    const verificacion = bcrypt.compareSync(password, user.password);

    if (!verificacion) {
    //   res.status(404).json({ message: "Contraseña incorrecta." });
    throw new Error('Contraseña incorrecta!')
    } else {
      const token = jwt.sign(
        { username: user.username, email: user.email },
        process.env.JWT_KEY,
        { expiresIn: 60 }
      );

      req.session.user = user;

      return token;
    }
  }
};