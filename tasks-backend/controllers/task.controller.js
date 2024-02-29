const Task = require('../models/Task');

module.exports = {
    getTasks: async (req, res) => {
        try {
            const tasks = await Task.find();
            console.log('Lista de tareas entregada')
            res.status(200).json(tasks)
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: 'Hubo un error en el procesamiento de la solicitud - ' + error.message })
        }
    },
    getTaskById: async (req, res) => {
        try {
            const task = await Task.findOne({ id: req.params.id });
            console.log('Tarea encontrada')
            res.status(200).json(task)
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: 'Hubo un error en el procesamiento de la solicitud - ' + error.message })
        }
    },
    postTask: async (req, res) => {
        try {
            const task = new Task(req.body);
            await task.save();
            console.log('Se ha creado una tarea')
            res.status(201).json({ message: 'Se ha creado la tarea exitosamente' })
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: 'Hubo un error en el procesamiento de la solicitud - ' + error.message })
        }
    },
    updateTaskById:async (req, res) => {
        try {
            const taskUpdated = await Task.findOneAndUpdate({ id: req.params.id })
            console.log('Se ha actualizado la tarea ' + taskDeleted.id)
            res.status(200).json({ message: 'Se ha actualizado exitosamente la tarea ' + taskUpdated.id })
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: 'Hubo un error en el procesamiento de la solicitud - ' + error.message })
        }
    },
    deleteTask: async (req, res) => {
        try {
            console.log(req.params.id)
            const taskDeleted = await Task.findByIdAndDelete(req.params.id)
            console.log('Se ha borrado la tarea ' + taskDeleted.id)
            res.status(200).json({ message: 'Se ha borrado exitosamente la tarea ' + taskDeleted.id })
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: 'Hubo un error en el procesamiento de la solicitud - ' + error.message })
        }
    }
}