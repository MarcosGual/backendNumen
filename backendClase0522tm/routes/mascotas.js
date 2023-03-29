const express = require("express");
const mascotaController = require("../controllers/mascotaController");
const router = express.Router();

/* GET users listing. */
router.get("/", mascotaController.obtenerMascotas);
router.get("/:id", mascotaController.obtenerMascotaPorId);

router.post("/", mascotaController.crearMascota);

module.exports = router;