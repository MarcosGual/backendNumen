var express = require('express');
const { obtenerUsuarios } = require('../controllers/usersController');
var router = express.Router();

/* GET users listing. */
router.get('/lista', obtenerUsuarios );

module.exports = router;
