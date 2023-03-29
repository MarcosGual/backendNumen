const Task = require("../models/Task");

module.exports = {
  getTasks: async (req, res) => {
    try {
      const tasks = await Task.find(); //pidiendo a la base de datos la lista de tareas

      res.status(200).json({ tasks, message: "Ok" });
    } catch (error) {
      res
        .status(500)
        .json({ tasks: null, message: `Error - ${error.message}` });
    }
  },
  postTask: async (req, res) => {
    try {
      const task = new Task(req.body);
      await task.save();

      res.status(201).json({ tasks: task, message: "Ok" });
    } catch (error) {
      res
        .status(500)
        .json({ tasks: null, message: `Error - ${error.message}` });
    }
  },
};
