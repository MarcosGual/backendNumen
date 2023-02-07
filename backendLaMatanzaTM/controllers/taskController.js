const Task = require("../models/Task");

module.exports = {
  getTasks: async (req, res) => {
    try {
      const tasks = await Task.find();
      res.status(200).json({ tasks, message: "Ok" });
    } catch (error) {
      res.status(500).json({ tasks: null, message: "Error - " + error.message });
    }
  },
  postTasks: async (req, res) => {
    try {
      const task = new Task(req.body);
      const savedTask = await task.save();
      res.status(201).json({ tasks: savedTask, message: "Ok" });
    } catch (error) {
      res.status(500).json({ tasks: null, message: "Error - " + error.message });
    }
  },
};
