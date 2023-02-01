import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Tarea 1",
    description: "Tarea 1 descripción",
    date: "2023-01-08",
    completed: true,
  },
  {
    id: "2",
    title: "Tarea 2",
    description: "Tarea 2 descripción",
    date: "2023-01-15",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      const task = {
        id: state.length + 1,
        ...action.payload,
        date: new Date().toLocaleString(),
        completed: false,
      };
      state.push(task);
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
