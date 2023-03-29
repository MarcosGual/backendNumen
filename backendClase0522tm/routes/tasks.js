const express = require("express");
const router = express.Router();

const taskController = require("../controllers/taskController");

/* GET users listing. */
router.get("/", taskController.getTasks);

router.post("/", taskController.postTask);

module.exports = router;