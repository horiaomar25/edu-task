"use client"
import React from 'react'
import TaskGrids from './Components/TaskGrids'
import useData from '../../Custom Hooks/useData'






const Dashboard = () => {
  const{ tasks, completeTask, isLoading } = useData();

  
  return (
    <>
  <TaskGrids tasks={tasks} completed={completeTask} isLoading={isLoading}/>

 
  </>
  )
}

export default Dashboard