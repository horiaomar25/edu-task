"use client";
import React, { useEffect, useState } from 'react';
import DashBoardGrid from '../../Components/DashBoardGrid';
import UseData from "../../Hooks/useData";

const Dashboard = () => {
  const { tasks, completeTask, isLoading } = UseData();
  const [isClient, setIsClient] = useState(false);

 

  return (
    
      <DashBoardGrid tasks={tasks} isLoading={isLoading} completeTask={completeTask} />
    
  );
};

export default Dashboard;
