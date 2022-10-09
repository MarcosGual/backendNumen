const express = require("express");
const router = express.Router();
const {
  obtenerGatos,
  agregarGato,
  obtenerGato,
  buscarGato,
  buscarGatoPorQuery,
} = require("../controllers/gatoController");
const { check } = require("express-validator");

router.get("/", obtenerGatos);

router.get("/buscar/:nombre", buscarGato);
router.get("/search", buscarGatoPorQuery);
router.get("/:id", obtenerGato);

router.post(
  "/crear",
  [
    check("nombre").not().isEmpty().withMessage("El nombre debe cargarse"),
    check("color").not().isEmpty().withMessage("El color debe cargarse"),
    check("edad")
      .isNumeric()
      .withMessage("La edad debe ser de tipo número")
      .isLength({min: 0, max: 2})
      .withMessage('La edad ingresada es inválida'),
  ],
  agregarGato
);

module.exports = router;
