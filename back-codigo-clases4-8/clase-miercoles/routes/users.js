const express = require("express");
const {
  registrarUsuario,
  obtenerUsuarios,
  logoutUsuario,
  loginUsuario,
} = require("../controllers/userController");
const router = express.Router();

/* GET users listing. */

router.get("/lista", obtenerUsuarios);

router.post("/registro", registrarUsuario);

router.post("/login", loginUsuario);

router.delete("/logout", logoutUsuario);

module.exports = router;
