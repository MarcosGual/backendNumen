const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");

//ruta de registro de usuario
router.post("/register", authController.register);

router.put("/login", authController.login);

module.exports = router;
