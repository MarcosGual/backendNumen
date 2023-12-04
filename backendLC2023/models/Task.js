const mongoose = require("mongoose");
const Schema = mongoose.Schema; //clase "esquema" de mongoose (le da forma al modelo)

const taskSchema = new Schema(
  {
    userId: {
      //id del usuario que crea la tarea
      //   type: mongoose.Types.ObjectId,
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

//clase que sirve para trabajar con el modelo Task (tarea)
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
