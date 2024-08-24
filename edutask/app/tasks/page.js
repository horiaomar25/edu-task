"use client";
import React, { useEffect, useState } from "react";
import TaskBoard from "../../Components/TaskBoard";
import useData from "../../Hooks/useData";

const Tasks = () => {
  const { tasks, TaskList, delTask, completeTask, isLoading } = useData();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner, or some placeholder content
  }

  return (
    <>
      <TaskBoard
        tasks={tasks}
        taskList={TaskList}
        delTask={delTask}
        completeTask={completeTask}
        isLoading={isLoading}
      />
    </>
  );
};

export default Tasks;
