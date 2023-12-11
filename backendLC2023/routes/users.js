const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { username, password } = require("../utils/validations");
const loginValidate = require("../middleware/loginValidate");
const validate = require("../middleware/validate");

router.get("/", userController.getAllUsers);
router.get("/jph", userController.getAllJPHUsers);
//sesiones
router.get("/newSession", userController.createSession);
router.get("/getSession", userController.getSessionInfo);
router.get("/closeSession", userController.closeSession);

router.post("/", userController.createUser);
router.post(
  "/login",
  loginValidate,
  username,
  password,
  validate,
  userController.loginUser
);

module.exports = router;
