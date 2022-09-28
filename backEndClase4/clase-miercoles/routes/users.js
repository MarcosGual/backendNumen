const express = require('express');
const { obtenerRecurso, obtenerUsuarios } = require('../controllers/userController');
const router = express.Router();

/* GET users listing. */
router.get('/', obtenerRecurso);

router.get('/lista', obtenerUsuarios);

module.exports = router;
