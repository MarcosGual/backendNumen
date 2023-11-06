let tasksDb = [
    { id: 1, tarea: 'hacer compras', hecha: false },
    { id: 2, tarea: 'estudiar javascript', hecha: true },
    { id: 3, tarea: 'limpiar habitación', hecha: false },
    { id: 4, tarea: 'cocinar', hecha: false },
]

const getTasks = (req, res) => {
    res.status(200).json(tasksDb);
}

const getTaskById = (req, res) => {
    const id = req.params.id;
    const task = tasksDb.find(task => task.id == id);

    if (task) {
        res.status(200).json({ task: task, msg: 'Ok' })
    } else {
        res.status(404).json({ task: null, msg: 'Recurso no encontrado.' })
    }
}

const createTask = (req, res) => {
    const { tarea } = req.body;
    // console.log(tarea);
    const tareaNueva = {
        id: tasksDb.length + 1,
        tarea: tarea,
        hecha: false
    }

    tasksDb.push(tareaNueva);

    res.status(201).json({ tasksDb, msg: 'Tarea agregada exitosamente' });
}

const updateTask = (req, res) => {
    const id = parseInt(req.params.id);
    let task = tasksDb.find(task => task.id == id);

    if (task) {
        const { tarea } = req.body;
        task = { ...task, tarea: tarea };
        const newTasksArray = tasksDb.filter(task => task.id !== id);
        tasksDb = [...newTasksArray, task];
        
        res.status(200).json({ task: task, msg: 'tarea actualizada exitosamente.' })
    } else {
        res.status(404).json({ task: null, msg: 'tarea no encontrada' });
    }
}

const deleteTask = (req, res) => {
    const id = parseInt(req.params.id);
    let task = tasksDb.find(task => task.id == id);

    if(task){
        tasksDb = tasksDb.filter(task=>task.id !== id );
        res.status(200).json({tasksDb, msg: 'Tarea eliminada exitosamente.'})
    }else{
        res.status(404).json({ task: null, msg: 'tarea no encontrada' });
    }
}

module.exports = { getTasks, getTaskById, createTask, updateTask, deleteTask }