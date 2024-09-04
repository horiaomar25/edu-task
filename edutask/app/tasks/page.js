"use client"
import React from "react";
import TaskBoard from "components/TaskBoard";
import useData from "../../hooks/useData";

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
