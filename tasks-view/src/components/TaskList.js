import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteTask } from "../features/tasks/taskSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      console.log(id)
      //petición HTTP de tipo DELETE (borrar tarea)
      await axios.delete(`http://localhost:8080/tasks/${id}`)
      dispatch(deleteTask(id));
      alert('Tarea borrada exitosamente!')
    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <div className="w-4/6">
      <header className="flex justify-between item-center py-4">
        <h2>Tareas: {tasks.length}</h2>
        <Link
          to="/crear-tarea"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"
        >
          Crear Tarea
        </Link>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {tasks.length > 0 ? tasks.map((task) => (
          <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
            <div className="flex justify-between">
              <h3>{task.title}</h3>
              <div className="flex gap-x-2">
                <button
                  className="bg-red-500 px-2 py-1 text-xs rounded-md"
                  onClick={() => handleDelete(task._id)}
                >
                  Borrar
                </button>
                <Link
                  className="bg-zinc-600 px-2 py-1 text-xs rounded-md"
                  to={`/editar-tarea/${task._id}`}
                >
                  Editar
                </Link>
              </div>
            </div>
            <p>{task.description}</p>
          </div>
        )) : 'No hay tareas'}
      </div>
    </div>
  );
};

export default TaskList;
