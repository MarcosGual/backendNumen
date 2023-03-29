const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const userController = require("../controllers/userController");
const existeUsuario = require("../middlewares/existeUsuario");
const validarUserName = require("../middlewares/validarUserName");

//CRUD: CREATE-READ-UPDATE-DELETE
//READ: OBTENER DATOS
router.get("/", userController.getUsers);
router.get("/buscar", userController.getUserByName);
router.get("/:id", userController.getUserById);

//CREATE: CREAR REGISTRO/DOCUMENTO
router.post(
  "/registro",
  existeUsuario,
  [
    check("username")
      .not()
      .isEmpty()
      .withMessage("El nombre de usuario es obligatorio"),
    check("password")
      .not()
      .isEmpty()
      .withMessage("La contraseña es obligatoria")
      .isLength({ min: 4, max: 10 })
      .withMessage(
        "La contraseña debe ser de 4 o más caracteres y de 10 o menos"
      ),
    check("email")
      .not()
      .isEmpty()
      .withMessage("El e-mail es obligatorio")
      .isEmail()
      .withMessage("Debe ingresar un e-mail válido"),
  ],
  userController.postUser
);

//UPDATE: ACTUALIZAR REGISTRO/DOCUMENTO
router.put(
  "/actualizar/:id",
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
      .withMessage("Debe ingresar un e-mail válido"),
  ],
  userController.updateUser
);

//DELETE: BORRAR REGISTRO/DOCUMENT
router.delete("/borrar/:id", userController.deleteUser);

module.exports = router;
