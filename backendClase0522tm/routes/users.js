const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const usersController = require("../controllers/usersController");
const validarUsername = require("../middlewares/validarUsername");

/* GET users listing. */
router.get("/", usersController.getUsers);
router.get("/buscar", usersController.getUserByName);
router.get("/usuariosjph", usersController.getUsersJPH);

//parametros de ruta se esperan de la forma :parámetro
router.get("/:id", usersController.getUserById);

router.post(
  "/registro",
  [
    check("username")
      .not()
      .isEmpty()
      .withMessage("El nombre de usuario es obligatorio"),
    check("password")
      .not()
      .isEmpty()
      .withMessage("El password es obligatorio")
      .isNumeric()
      .withMessage("El password debe ser sólamente de números")
      .isLength({ min: 6, max: 10 })
      .withMessage("El mínimo de caracteres son 6 y el máximo son 10"),
    check("email")
      .not()
      .isEmpty()
      .withMessage("El e-mail es obligatorio")
      .isEmail()
      .withMessage("El e-mail debe ser válido"),
  ], validarUsername,
  usersController.postUser
);

router.put(
  "/actualizar/:id",
  [
    check("username")
      .not()
      .isEmpty()
      .withMessage("El nombre de usuario es obligatorio"),
    check("password")
      .not()
      .isEmpty()
      .withMessage("El password es obligatorio")
      .isNumeric()
      .withMessage("El password debe ser sólamente de números")
      .isLength({ min: 6, max: 10 })
      .withMessage("El mínimo de caracteres son 6 y el máximo son 10"),
    check("email")
      .not()
      .isEmpty()
      .withMessage("El e-mail es obligatorio")
      .isEmail()
      .withMessage("El e-mail debe ser válido"),
  ],
  usersController.putUser
);

router.delete("/eliminar/:id", usersController.deleteUser);

module.exports = router;
