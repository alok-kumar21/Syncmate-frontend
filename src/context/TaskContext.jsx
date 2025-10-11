import { createContext, useContext } from "react";
import useFetch from "../pages/useFetch";

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export default useTaskContext;

export function TaskProvider({ children }) {
  const {
    data: taskData,
    loading: taskLoading,
    error: taskError,
  } = useFetch("http://localhost:4001/api/v1/tasks");
  const {
    data: projectData,
    loading: projectLoading,
    error: projectError,
  } = useFetch("http://localhost:4001/api/v1/projects");
  return (
    <TaskContext.Provider
      value={{
        taskData,
        taskLoading,
        taskError,
        projectData,
        projectLoading,
        projectError,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
