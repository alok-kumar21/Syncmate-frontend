import { createContext, useContext, useState, useEffect } from "react";
import useFetch from "../pages/useFetch";

const TaskContext = createContext();
export const useTaskContext = () => useContext(TaskContext);

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

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (taskData) setTasks(taskData);
  }, [taskData]);

  async function deleteTask(taskId) {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const response = await fetch(
        `http://localhost:4001/api/v1/tasks/${taskId}`,
        {
          method: "DELETE",
          headers,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete task");
      }

      // Update UI locally
      setTasks((prev) => prev.filter((task) => task._id !== taskId));
    } catch (error) {
      console.log("Error:", error);
    }
  }

  return (
    <TaskContext.Provider
      value={{
        taskData: tasks,
        taskLoading,
        taskError,
        projectData,
        projectLoading,
        projectError,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
