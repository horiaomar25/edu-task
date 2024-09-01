import { useState, useEffect } from "react";
import apiRequest from "../utils/apiRequest";

const useData = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await apiRequest("https://edutask-be.onrender.com/tasks", "GET");
      setTasks(response.data);
    } catch (error) {
      setError("Failed to fetch tasks");
    } finally {
      setIsLoading(false);
    }
  };

  const createTask = async (newTask) => {
    setError(null);
    try {
      const response = await apiRequest("https://edutask-be.onrender.com/tasks", "POST", newTask);
      setTasks((prevTasks) => [...prevTasks, response.data]);
    } catch (error) {
      setError("Failed to create task");
    }
  };

  const updateTask = async (taskId, updatedTask) => {
    setError(null);
    try {
      await apiRequest(`https://edutask-be.onrender.com/tasks/${taskId}`, "PUT", updatedTask);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === taskId ? { ...task, ...updatedTask } : task))
      );
    } catch (error) {
      setError(`Failed to update task with ID: ${taskId}`);
    }
  };

  const delTask = async (taskId) => {
    setError(null);
    try {
      await apiRequest(`https://edutask-be.onrender.com/tasks/${taskId}`, "DELETE");
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      setError(`Failed to delete task with ID: ${taskId}`);
    }
  };

  const completeTask = async (taskId) => {
    setError(null);
    try {
      await apiRequest(`https://edutask-be.onrender.com/tasks/${taskId}`, "PUT");
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, completed: true } : task
        )
      );
    } catch (error) {
      setError(`Failed to complete task with ID: ${taskId}`);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    tasks,
    isLoading,
    error,
    createTask,
    updateTask,
    delTask,
    completeTask,
  };
};

export default useData;