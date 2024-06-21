const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    const { password } = req.body;
    const salt = bcrypt.genSaltSync(10); //generación de algoritmo de encriptado
    const hashedPassword = bcrypt.hashSync(password, salt); //clave encriptada (hashed password)

    const newUser = { ...req.body, password: hashedPassword }; //spread operator (...)

    const user = await User.create(newUser);

    res.status(201).json({ user, message: "Usuario creado correctamente" });
  } catch (error) {
    console.log("Error al registrar usuario - " + error.message);
    res.status(500).json({ message: "Error al registrar usuario." });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "Email incorrecto." });
    }

    const comparePassword = bcrypt.compareSync(password, user.password); //true or false

    if (comparePassword) {
      const token = jwt.sign(
        { userId: user._id, userEmail: user.email },
        process.env.JWT_SECRET,
        { expiresIn: 60*2 }
      );

      res.status(200).json({ user, token });
    }else{
        res.status(400).json({message: 'Clave incorrecta.'})
    }
  } catch (error) {
    console.log("Error en el login - " + error.message);
    res.status(500).json("Error en el login.");
  }
};
