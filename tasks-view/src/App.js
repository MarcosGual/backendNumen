import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useEffect } from "react";
import axios from "axios";
import { readTasks } from "./features/tasks/taskSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch=useDispatch()

  useEffect(() => {
    const updateState = async () => {
      try {
        //petición HTTP de leer: GET (la lista de tareas)
        const response = await axios.get("http://localhost:8080/tasks");
        console.log(response)
        let tasks = response.data;
        console.log(tasks)
        dispatch(readTasks(tasks))
      } catch (error) {
        console.log(error.message);
      }
    };

    updateState()
  }, []);

  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/crear-tarea" element={<TaskForm />} />
            <Route path="/editar-tarea/:id" element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
