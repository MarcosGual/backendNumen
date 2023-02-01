import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleInput = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        id: uuid(),
        ...task,
        createdAt: new Date().toLocaleDateString(),
        completed: false,
      })
    );
    navigate("/");
  };

  return (
    <form>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="título"
        onChange={handleInput}
      />
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        placeholder="descripción"
        onChange={handleInput}
      ></textarea>
      <button type="submit" onClick={handleSubmit}>
        guardar
      </button>
    </form>
  );
};

export default TaskForm;
