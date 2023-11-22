"use client";
import React from "react";
import TaskBoard from "./TaskBoard";

import { useState, useEffect } from "react";

const Tasks = () => {
  // Create a new state variable, isFormOpen, and its setter function, setIsFormOpen.
  // 1. Create state to display/store the data
  const [tasks, setTasks] = useState([]);

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

  // 3. This will hand the side effect of fetching data from the database.
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <TaskBoard tasks={tasks} />
    </>
  );
};

export default Tasks;
