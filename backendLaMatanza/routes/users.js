const express = require("express");
const { route } = require(".");
const router = express.Router();
const { check } = require("express-validator");
const userController = require("../controllers/userController");
const validarUserId = require("../middlewares/validarUserId");
const validarUserName = require("../middlewares/validarUserName");

/* GET users listing. */
router.get("/", userController.getUsers);
router.get("/:id([0-9a-fA-F]{24})", validarUserId, userController.getUserById);
router.get("/jph/:id", userController.getUserJPH);

/* POST user */
router.post(
  "/new",
  check("username")
    .not()
    .isEmpty()
    .withMessage("El nombre de usuario es obligatorio"),
  check("email")
    .not()
    .isEmpty()
    .withMessage("El e-mail es obligatorio")
    .isEmail()
    .withMessage("El campo debe ser un e-mail válido"),
  validarUserName,
  userController.postUser
);

/* PUT user */
router.put(
  "/edit/:id([0-9a-fA-F]{24})",
  validarUserId,
  check("username")
    .not()
    .isEmpty()
    .withMessage("El nombre de usuario es obligatorio"),
  check("email")
    .not()
    .isEmpty()
    .withMessage("El e-mail es obligatorio")
    .isEmail()
    .withMessage("El campo debe ser un e-mail válido"),
  validarUserName,
  userController.editUser
);

/* DELETE users */

router.delete(
  "/delete/:id([0-9a-fA-F]{24})",
  validarUserId,
  userController.deleteUser
);

module.exports = router;
