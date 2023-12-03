"use client";
import React from "react";
import TaskBoard from "./TaskBoard";
import  useData  from "../Custom Hooks/useData"
import EditForm from "./EditForm";


import { useState, useEffect } from "react";

const Tasks = () => {
  const { tasks, TaskList, delTask, completeTask, } = useData()
 

  return (
    <>
      <TaskBoard tasks={tasks} taskList={TaskList} delTask={delTask} completeTask={completeTask} />
     
   
    </>
  );
};

export default Tasks;
