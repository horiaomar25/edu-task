"use client";
import React, { useEffect, useState } from 'react';
import DashBoardGrid from '../../components/DashBoardGrid';
import useData from "../../hooks/useData";

const Dashboard = () => {
  const { tasks, completeTask, isLoading } = useData();
  const [isClient, setIsClient] = useState(false);

 

  return (
    
      <DashBoardGrid tasks={tasks} isLoading={isLoading} completeTask={completeTask} />
    
  );
};

export default Dashboard;
