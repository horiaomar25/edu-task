"use client"
import React from "react";
import TaskBoard from "../../Components/TaskBoard";
import { useTaskContext } from "../../Context/TaskContext"; // Import the custom hook to use the context

const Tasks = () => {
  // Use the custom hook to access context data and methods
  const { tasks, taskList, delTask, completeTask, isLoading } = useTaskContext();

  return (
    <>
  
    
        <TaskBoard
          tasks={tasks}
          taskList={taskList}
          delTask={delTask}
          completeTask={completeTask}
          isLoading={isLoading}
    
        />
 
    </>
  );
};

export default Tasks;
