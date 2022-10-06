const express = require('express');
const { obtenerProductos, obtenerProductoPorId, cargarProducto } = require('../controllers/productoController');
const router = express.Router();

/* GET users listing. */
router.get('/lista', obtenerProductos);
router.get('/id/:id', obtenerProductoPorId);

//Posts (crear recursos)

router.post('/crear', cargarProducto);

module.exports = router;