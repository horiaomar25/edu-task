"use client"
import React from "react";
import TaskBoard from "../../Components/TaskBoard";
import useData from "../../Custom Hooks/useData";

const Tasks = () => {
  const { tasks, TaskList, delTask, completeTask, isLoading } = useData();

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
