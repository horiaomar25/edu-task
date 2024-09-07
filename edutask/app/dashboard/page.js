"use client";
import React, { useEffect, useState } from 'react';
import DashBoardGrid from '../../Components/DashBoardGrid';
import { useTaskContext } from "../../Context/TaskContext";

const Dashboard = () => {
  const { tasks, completeTask, isLoading } = useTaskContext();


 

  return (
    
      <DashBoardGrid tasks={tasks} isLoading={isLoading} completeTask={completeTask} />
    
  );
};

export default Dashboard;
