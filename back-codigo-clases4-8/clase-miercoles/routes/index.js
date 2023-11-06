const express = require("express");
const {
  crearSesion,
  verCookie,
  eliminarCookie,
  eliminarSesion,
  generarCrypto
} = require("../controllers/indexController");
const router = express.Router();
const auth = require('../middlewares/auth');

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/nuevaSesion", crearSesion);
router.get("/verCookie", auth, verCookie);
router.get("/eliminarCookie", eliminarCookie);
router.get("/eliminarSesion", eliminarSesion);
router.get("/nuevoCrypto", generarCrypto);

module.exports = router;
