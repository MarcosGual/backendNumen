const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');

//.get --> nos especifica que espera el método GET (obtener) 
router.get('/', taskController.getTasks);
router.get('/:id', taskController.getTaskById);

router.post('/', taskController.createTask);

router.put('/:id', taskController.updateTask);

router.delete('/:id', taskController.deleteTask);

module.exports = router;