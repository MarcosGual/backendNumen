const { check } = require("express-validator");

const userId = check("userId")
  .notEmpty()
  .withMessage("El user ID es obligatorio.")
  .isNumeric()
  .withMessage("El campo user ID debe ser numérico.")
  .isLength({ min: 3, max: 8 })
  .withMessage("La longitud del user ID debe ser de entre 3 y 8 caracteres");

const title = check("title")
  .notEmpty()
  .withMessage("El título es obligatorio.")
  .isString()
  .withMessage("El campo título debe ser cadena.")
  .isLength({ min: 5, max: 20 })
  .withMessage("La longitud del título debe ser de entre 5 y 20 caracteres");

const username = check("username")
  .notEmpty()
  .withMessage("El nombre de usuario es obligatorio")
  .isLength({ min: 5, max: 15 })
  .withMessage(
    "El nombre de usuario debe tener al menos 5 caracteres y como máximo 15."
  );

const password = check("password")
  .notEmpty()
  .withMessage("El password es obligatorio")
  .isAlphanumeric()
  .withMessage("El password debe tener letras y números.")
  .isLength({ min: 8, max: 12 })
  .withMessage(
    "El password debe tener al menos 8 caracteres y como máximo 12."
  );

module.exports = { userId, title, username, password };
