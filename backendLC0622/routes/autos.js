const express = require("express");
const router = express.Router();
const autoController = require("../controllers/autoController");

//obtener Lista de autos
router.get("/", autoController.getAutos);
// router.get('/:')

//crear auto
router.post("/", autoController.postAuto);

//actualizar auto

//borrar auto

module.exports = router;
