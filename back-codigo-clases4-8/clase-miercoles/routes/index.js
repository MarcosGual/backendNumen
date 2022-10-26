const express = require("express");
const {
  crearSesion,
  verCookie,
  eliminarCookie,
} = require("../controllers/indexController");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/nuevaSesion", crearSesion);
router.get("/verCookie", verCookie);
router.get("/eliminarCookie", eliminarCookie);

module.exports = router;
