import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteTask } from "../features/tasks/taskSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
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
        {tasks.map((task) => (
          <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
            <div className="flex justify-between">
              <h3>{task.title}</h3>
              <div className="flex gap-x-2">
                <button
                  className="bg-red-500 px-2 py-1 text-xs rounded-md"
                  onClick={() => handleDelete(task.id)}
                >
                  Borrar
                </button>
                <Link
                  className="bg-zinc-600 px-2 py-1 text-xs rounded-md"
                  to={`/editar-tarea/${task.id}`}
                >
                  Editar
                </Link>
              </div>
            </div>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
