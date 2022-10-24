const express = require("express");
const router = express.Router();
const {
  indexController,
  crearSession,
  verSession,
  cerrarSession,
} = require("../controllers/indexController");
const auth = require("../middleware/auth");

router.get("/", indexController);
router.get("/nuevaSesion", crearSession);
router.get("/sesion", auth, verSession);
router.get("/cerrarSesion", cerrarSession);

module.exports = router;
