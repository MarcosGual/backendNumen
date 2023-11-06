const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");
const { route } = require("./users");
const { check } = require("express-validator");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/nuevaSesion", indexController.crearSesion);
router.get("/verSesion", indexController.verSession);
router.get("/cerrarSesion", indexController.cerrarSession);

router.get("/verCookie", indexController.verCookie);
router.get("/eliminarCookie", indexController.eliminarCookie);

router.post(
  "/login",
  [
    check("username")
      .not()
      .isEmpty()
      .withMessage("El nombre de usuario es obligatorio"),
    check("password").not().isEmpty().withMessage("El password es obligatorio"),
  ],
  indexController.logIn
);
router.get("/logout", indexController.logOut);

module.exports = router;
