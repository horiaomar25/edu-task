"use client";
import React, { useEffect, useState } from 'react';
import DashBoardGrid from '../../components/DashBoardGrid';
import useData from "../../hooks/useData";

const Dashboard = () => {
  const { tasks, completeTask, isLoading } = useData();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner, or some placeholder content
  }

  return (
    
      <DashBoardGrid tasks={tasks} isLoading={isLoading} completeTask={completeTask} />
    
  );
};

export default Dashboard;
