const express = require("express");
const router = express.Router();
const { getUsers, postUser } = require("../controllers/userController");

/* GET users listing. */
router.get("/", getUsers);

router.post("/new", postUser);

module.exports = router;
