const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controllers');
const { email, password } = require('../utils/validators');
const validate = require('../middlewares/validate');

router.get('/login', authController.createSession);
router.get('/counter', authController.sessionCounter);
router.get('/logout', authController.closeSession);
router.get('/user', authController.getUserInSession);

router.put('/', [email, password], validate, authController.loginUser);

module.exports = router;