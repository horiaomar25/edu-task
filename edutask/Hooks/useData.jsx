import React, { useState, useEffect } from "react";

// Utility function to handle API requests
const apiRequest = async (url, method = "GET", body = null) => {
  try {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error with ${method} request to ${url}:`, error);
    throw error;
  }
};

const useData = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all tasks
  const fetchTasks = async () => {
    setIsLoading(true);
    try {
      const data = await apiRequest("https://edutask-be.onrender.com/tasks");
      setTasks(data.data || []);
    } catch (error) {
      setError("Failed to fetch tasks");
    } finally {
      setIsLoading(false);
    }
  };

  // Create a new task
  const createTask = async (task) => {
    try {
      await apiRequest("https://edutask-be.onrender.com/tasks", "POST", task);
      fetchTasks();
    } catch (error) {
      setError("Failed to create task");
    }
  };

  // Update an existing task
  const updateTask = async (taskId, updatedTaskData) => {
    try {
      await apiRequest(`https://edutask-be.onrender.com/tasks/${taskId}`, "PATCH", updatedTaskData);
      fetchTasks();
    } catch (error) {
      setError(`Failed to update task with ID: ${taskId}`);
    }
  };

  // Delete a task
  const delTask = async (taskId) => {
    try {
      await apiRequest(`https://edutask-be.onrender.com/tasks/${taskId}`, "DELETE");
      fetchTasks();
    } catch (error) {
      setError(`Failed to delete task with ID: ${taskId}`);
    }
  };

  // Mark a task as complete
  const completeTask = async (taskId) => {
    try {
      await apiRequest(`https://edutask-be.onrender.com/tasks/${taskId}`, "PUT");
      fetchTasks();
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
