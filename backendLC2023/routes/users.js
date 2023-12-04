const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { username, password } = require("../utils/validations");
const loginValidate = require("../middleware/loginValidate");
const validate = require("../middleware/validate");

router.get("/", userController.getAllUsers);
router.get("/jph", userController.getAllJPHUsers);

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
