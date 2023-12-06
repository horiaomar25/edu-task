"use client"
import React from 'react'
import TaskGrids from './Components/TaskGrids'
import useData from '../Custom Hooks/useData'
import TaskHeader from './Components/TaskHeader'





const Dashboard = () => {
  const{ tasks } = useData();

  
  return (
    <>
  <TaskGrids tasks={tasks}/>

 
  </>
  )
}

export default Dashboard