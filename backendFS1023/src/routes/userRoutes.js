const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controllers");
const { username, email, password } = require("../utils/validators");
const validate = require("../middlewares/validate");

router.get("/list", userController.getUsers);

router.post("/", [username, email, password], validate, userController.registerUser);

//router.put('/', [email, password], validate, userController.loginUser);

module.exports = router;