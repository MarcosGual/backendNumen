const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
