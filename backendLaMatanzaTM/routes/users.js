const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const userController = require("../controllers/userController");

/* GET users listing. */
router.get("/buscar", userController.obtenerUsuarioxNombre);
router.get("/", userController.obtenerUsuarios);
router.get("/:id([0-9a-fA-F]{24})", userController.obtenerUsuarioxId);

router.get("/status/:id([0-9a-fA-F]{24})", userController.obtenerStatusUsuario);

/* POST users */

router.post(
  "/registrar",
  [
    check("username")
      .not()
      .isEmpty()
      .withMessage("El nombre de usuario es obligatorio"),
    check("email")
      .not()
      .isEmpty()
      .withMessage("El e-mail es obligatorio")
      .isEmail()
      .withMessage("El e-mail debe ser válido"),
    check("password")
      .not()
      .isEmpty()
      .withMessage("El password es obligatorio")
      .isAlphanumeric()
      .withMessage("El password debe contener letras y números")
      .isLength({ min: 4, max: 16 })
      .withMessage("El password debe tener 4 dígitos o más y 16 o menos"),
  ],
  userController.registrarUsuario
);

/* PUT users */

router.put("/editar/:id([0-9a-fA-F]{24})", userController.editarUsuario);

/* DELETE users */

router.delete("/eliminar/:id([0-9a-fA-F]{24})", userController.eliminarUsuario);

module.exports = router;
