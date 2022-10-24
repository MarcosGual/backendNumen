const express = require("express");
const router = express.Router();
const { indexController, crearSession, verSession } = require("../controllers/indexController");

router.get("/", indexController);
router.get("/nuevaSesion", crearSession);
router.get("/sesion", verSession);

module.exports = router;