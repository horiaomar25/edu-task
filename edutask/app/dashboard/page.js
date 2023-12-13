"use client"
import React from 'react'
import TaskGrids from './Components/TaskGrids'
import useData from '../Custom Hooks/useData'






const Dashboard = () => {
  const{ tasks, completeTask } = useData();

  
  return (
    <>
  <TaskGrids tasks={tasks} completed={completeTask}/>

 
  </>
  )
}

export default Dashboard