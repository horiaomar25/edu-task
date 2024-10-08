"use client"
import React from 'react'
import { useState, useEffect } from "react"

const UseData = () => {
  // Create a new state variable, isFormOpen, and its setter function, setIsFormOpen.
  // 1. Create state to display/store the data
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Create Task - POST method
  const createTask = async (task) => {
    try {
      const response = await fetch("https://edutask-api-ukvej.ondigitalocean.app/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task_name: task.task_name,
          task_description: task.task_description,
          task_date: task.task_date,
          task_type: task.task_type,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const newTask = await response.json();

      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  }


  // 2. Fetching data from the database to display on the task board.
  const fetchTasks = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://edutask-api-ukvej.ondigitalocean.app/tasks");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setTasks(data.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setIsLoading(false);
    }
  };

  //Update Task
  const updateTask = async (taskId, updatedTaskData) => {
    try {
      const response = await fetch(`https://edutask-api-ukvej.ondigitalocean.app/tasks/${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTaskData),
      });

      if (!response.ok) {
        throw new Error(`Failed to update task with ID: ${taskId}`);
      }
      // Fetch updated tasks after successful update
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Delete Task
  const delTask = async (taskId) => {
    try {
      const response = await fetch(`https://edutask-api-ukvej.ondigitalocean.app/tasks/${taskId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Failed to delete task with ID: ${taskId}`);
      }
      // Fetch updated tasks after successful deletion
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Complete Task - PUT method
  const completeTask = async (taskId) => {
    try {
      const response = await fetch(`https://edutask-api-ukvej.ondigitalocean.app/tasks/${taskId}`, {
        method: "PUT", // Assuming PUT method is used for updating tasks
      });
      if (!response.ok) {
        throw new Error(`Failed to complete task with ID: ${taskId}`);
      }
      // Fetch updated tasks after successful completion
      fetchTasks();
    } catch (error) {
      console.error("Error completing task:", error);
    }
  };

  // 3. This will hand the side effect of fetching data from the database.
  useEffect(() => {
    fetchTasks()
  }, []);

  // newTask is the newly created task to be passed into the exsisting tasks. 
  const taskList = (newTask) => {
    // creates a new array that appends the newTask to the exsisting data.
    // PURPOSE: adds a new task without fetching all tasks from the server. This allows the new task to be displayed immediately after creation 
    setTasks([...tasks, newTask]);
  };

  return {
    tasks,
    updateTask,
    taskList,
    delTask,
    completeTask,
    createTask,
    isLoading,

  }

}

export default UseData