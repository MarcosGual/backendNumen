const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getUsers);
router.get("/buscar", userController.getUserByName);
router.get("/:id", userController.getUserById);

router.post("/registrar", userController.postUser);

module.exports = router;
