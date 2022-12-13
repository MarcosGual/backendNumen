const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

/* GET users listing. */
router.get("/", userController.obtenerUsuarios);
router.get("/:id", userController.obtenerUsuarioxId);

router.get("/status/:id", userController.obtenerStatusUsuario);

module.exports = router;