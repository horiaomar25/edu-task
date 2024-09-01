"use client";
import React, { useEffect, useState } from "react";
import TaskBoard from "components/TaskBoard";
import useData from "@/hooks/useData";

const Tasks = () => {
  const { tasks,delTask, completeTask, isLoading, createTask } = useData();
  const [isClient, setIsClient] = useState(false);
  const[closed, setClosed] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner, or some placeholder content
  }

  const handleClose = () => {
    setClosed(true);
  };

  return (
    <>
      <TaskBoard
        tasks={tasks}
       
        delTask={delTask}
        completeTask={completeTask}
        isLoading={isLoading}
        createTask={createTask}
        handleClose={handleClose}
      />
    </>
  );
};

export default Tasks;