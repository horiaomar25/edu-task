"use client";
import React from "react";
import TaskBoard from "./TaskBoard";
import  useData  from "../api/useData"
import EditForm from "./EditForm";


import { useState, useEffect } from "react";

const Tasks = () => {
  const { tasks } = useData()
 

  return (
    <>
      <TaskBoard tasks={tasks} />
     
   
    </>
  );
};

export default Tasks;
