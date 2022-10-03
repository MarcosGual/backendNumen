const express = require('express');
const { obtenerProductos, cargarProducto } = require('../controllers/productoController');
const router = express.Router();

/* GET users listing. */
router.get('/lista', obtenerProductos);

router.post('/cargar', cargarProducto);

module.exports = router;