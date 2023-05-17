const express = require('express');
const router = express.Router();
const taskController =require('../controllers/task.controller');

/* GET users listing. */
router.get('/', taskController.getTasks);
router.get('/:id', taskController.getTaskById);

router.post('/', taskController.postTask);

router.put('/:id', taskController.updateTaskById);

router.delete('/:id', taskController.deleteTask);

module.exports = router;
