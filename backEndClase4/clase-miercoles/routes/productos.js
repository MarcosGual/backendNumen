const express = require('express');
const { obtenerProductos } = require('../controllers/productoController');
const router = express.Router();

/* GET users listing. */
router.get('/lista', obtenerProductos);

module.exports = router;