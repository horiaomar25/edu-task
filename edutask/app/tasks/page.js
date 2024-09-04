"use client"
import React from "react";
import TaskBoard from "../../Components/TaskBoard";
import UseData from "../../Hooks/useData";

const Tasks = () => {
  const { tasks, TaskList, delTask, completeTask, isLoading } = UseData();

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
