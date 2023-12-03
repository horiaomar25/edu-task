import React from 'react'
import { useState, useEffect } from "react"

const useData = () => {
    // Create a new state variable, isFormOpen, and its setter function, setIsFormOpen.
  // 1. Create state to display/store the data
  const [tasks, setTasks] = useState([]);

  

  // Create Task - POST method
  const createTask = async (task) => {
    try {
      const response = await fetch("http://localhost:3001/tasks/", {
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

      // Update the task list in the parent component
      // updateTask(newTask);

      // setTaskName("");
      // setTaskDescription("");
      // setTaskDueDate("");
      // setTaskType("");
      
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  }
  

  // 2. Fetching data from the database to display on the task board.
  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:3001/tasks");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setTasks(data.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // PATCH route to update Tasks
  const updateTask = async (taskId, updatedTaskData) => {
    try {
      const response = await fetch(`http://localhost:3001/tasks/${taskId}`, {
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
      const response = await fetch(`http://localhost:3001/tasks/${taskId}`, {
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
      const response = await fetch(`http://localhost:3001/tasks/${taskId}`, {
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

  const TaskList = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Delete Task


  return {
    tasks,
    updateTask,
    TaskList,
    delTask, 
    completeTask,
    createTask
  }
   
  
}

export default useData