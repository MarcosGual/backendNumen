const express = require("express");
const { route } = require(".");
const router = express.Router();
const {
  getUsers,
  postUser,
  getUserById,
} = require("../controllers/userController");

/* GET users listing. */
router.get("/", getUsers);
router.get("/:id", getUserById);

router.post("/new", postUser);

module.exports = router;
