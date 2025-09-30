import { createContext, useContext, useState, useEffect } from "react";
import useFetch from "../pages/useFetch";

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export default useTaskContext;

export function TaskProvider({ children }) {
  const { data, error } = useFetch("http://localhost:4001/api/v1/tasks");
  return (
    <TaskContext.Provider value={{ data, error }}>
      {children}
    </TaskContext.Provider>
  );
}
