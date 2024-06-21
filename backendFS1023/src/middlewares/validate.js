const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const extratedErrors = [];

    errors
      .array()
      .map((error) => extratedErrors.push({ [error.type]: error.msg }));

    return res.status(400).json({
      message: "Error de validación. Datos incorrectos.",
      extratedErrors,
    });
  } else {
    next(); //pasa a lo siguiente
  }
};

module.exports = validate;