const express = require("express");
const router = express.Router();
const { obtenerGatos, agregarGato, obtenerGato, buscarGato, buscarGatoPorQuery } = require("../controllers/gatoController");

router.get("/", obtenerGatos);

router.get('/buscar/:nombre', buscarGato);
router.get('/search', buscarGatoPorQuery);
router.get('/:id', obtenerGato);

router.post("/crear", agregarGato);

module.exports = router;
