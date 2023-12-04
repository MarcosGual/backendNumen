const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  //   res.status(200).json(tasksDb);
  try {
    const allTasks = await Task.find(); //trae TODAS las tareas de la colección
    console.log(req.user);
    res.status(200).json({ tasks: allTasks, msg: "Ok" });
  } catch (e) {
    res
      .status(500)
      .json({ tasks: [], msg: "Error en el servidor - " + e.message });
  }
};

const getTaskById = async (req, res) => {
  const id = req.params.id;
  const task = await Task.findById(id);

  if (task) {
    res.status(200).json({ task: task, msg: "Ok" });
  } else {
    res.status(404).json({ task: null, msg: "Recurso no encontrado." });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body); //creamos una nueva tarea en la base de datos

    res.status(201).json({ task, msg: "Tarea agregada exitosamente" });
  } catch (e) {
    res
      .status(500)
      .json({ msg: "Error al cargar la nueva tarea - " + e.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ task: task, msg: "Ok" });
  } catch (e) {
    res
      .status(500)
      .json({ msg: "Error en la actualización de la tarea - " + e.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ task: deletedTask, msg: "Tarea eliminada exitosamente." });
  } catch (e) {
    res.status(500).json({ msg: "Error al eliminar tarea - " + e.message });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
