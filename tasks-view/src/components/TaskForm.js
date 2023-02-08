import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const handleInput = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(updateTask(task));
    } else {
      const tarea = {
        id: uuid(),
        ...task,
        createdAt: new Date().toLocaleDateString(),
        completed: false,
      };

      axios
        .post("http://localhost:8080/tasks", tarea)
        .then(function (response) {
          dispatch(addTask(tarea));
          navigate("/");
        })
        .catch(function (error) {
          console.log(error.message);
        });
    }
  };

  useEffect(() => {
    console.log(params.id, tasks);
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      setTask(taskFound);
      console.log(task);
    }
  }, []);

  return (
    <form className="bg-zinc-800 max-w-sm p-4 mb-2">
      <label htmlFor="title" className="block text-sm fond-bold">
        tarea:{" "}
      </label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="título"
        onChange={handleInput}
        value={task.title}
        className="w-full p-2 rounded-md bg-zinc-600 bg-zinc-600"
      />
      <label htmlFor="description" className="block text-sm fond-bold">
        descripción:{" "}
      </label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        placeholder="descripción"
        onChange={handleInput}
        value={task.description}
        className="w-full p-2 rounded-md bg-zinc-600 bg-zinc-600"
      ></textarea>
      <div className="flex justify-center gap-3">
        <button
          className="bg-indigo-600 px-2 py-1"
          type="submit"
          onClick={handleSubmit}
        >
          guardar
        </button>
        <button
          className="bg-red-500 px-2 py-1"
          type="submit"
          onClick={() => navigate("/")}
        >
          cancelar
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
