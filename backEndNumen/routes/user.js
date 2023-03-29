const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {
  loginUsuario,
  logoutUsuario,
  registrarUsuario,
  verUsuarios,
  obtenerUsuariosExt,
} = require("../controllers/userController");

router.get("/lista", verUsuarios);
router.get("/externos", obtenerUsuariosExt);

router.post(
  "/registro",
  [
    check("email")
      .not()
      .isEmpty()
      .withMessage("Ingrese un email")
      .isEmail()
      .withMessage("Ingrese correctamente el email"),
    check("name").not().isEmpty().withMessage("Ingrese un usuario"),
    check("pass").not().isEmpty().withMessage("Ingrese una contraseña"),
  ],
  registrarUsuario
);

router.post(
  "/login",
  [
    check("name").not().isEmpty().withMessage("Ingrese un usuario"),
    check("pass").not().isEmpty().withMessage("Ingrese una contraseña"),
  ],
  loginUsuario
);

router.delete("/logout", logoutUsuario);

module.exports = router;
