const { body } = require("express-validator");

exports.username = body("username")
  .notEmpty()
  .withMessage("El nombre de usuario es obligatorio")
  .isLength({ min: 5, max: 15 })
  .withMessage("El nombre de usuario debe tener entre 5 y 15 caracteres.");

exports.updateUsername = body("username")
  .isLength({ min: 5, max: 15 })
  .withMessage("El nombre de usuario debe tener entre 5 y 15 caracteres.")
  .optional();

exports.email = body("email")
  .notEmpty()
  .withMessage("El e-mail es obligatorio")
  .isEmail()
  .withMessage("El e-mail proporcionado debe ser válido.");

exports.password = body("password")
  .notEmpty()
  .withMessage("El password es obligatorio")
  .isStrongPassword({
    minLength: 6,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 0,
  })
  .withMessage(
    "El password debe tener un mínimo de 6 caracteres, y al menos una mayúscula, una minúscula y un número"
  );
