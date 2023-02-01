import React from "react";
import { useSelector } from "react-redux";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  console.log("tasklist");
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
