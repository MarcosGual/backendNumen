const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");
const jwtValidate = require("../middleware/jwtValidate");
const loggerMiddleware = require("../middleware/loggerMiddleware");

/* GET users listing. */
router.get("/", userController.getAllUsers);

router.get("/JPH", userController.getJPHUsers);

module.exports = router;