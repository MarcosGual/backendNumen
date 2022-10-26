const express = require("express");
const router = express.Router();
const {
  indexController,
  crearSession,
  verSession,
  cerrarSession,
  verCookie,
  eliminarCookie,
} = require("../controllers/indexController");
const auth = require("../middleware/auth");

router.get("/", indexController);
router.get("/nuevaSesion", crearSession);
router.get("/sesion", auth, verSession);
router.get("/cerrarSesion", cerrarSession);
router.get("/verCookie", verCookie);
router.get("/eliminarCookie", eliminarCookie);

module.exports = router;
