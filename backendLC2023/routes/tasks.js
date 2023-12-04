const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate");
const taskController = require("../controllers/taskController");
const { title, userId } = require("../utils/validations");
const jwtValidate = require("../middleware/jwtValidate");

//.get --> nos especifica que espera el método GET (obtener)
router.get("/", jwtValidate, taskController.getAllTasks);
router.get("/:id", taskController.getTaskById);

router.post(
  "/",
  userId, //campo de validación
  title, //otro campo de validación
  validate, //función que valida los campos (middleware o filtro)
  taskController.createTask
);

router.put("/:id", taskController.updateTask);

router.delete("/:id", taskController.deleteTask);

module.exports = router;
