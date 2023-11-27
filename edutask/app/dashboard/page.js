"use client"
import React from 'react'
import TaskGrids from './Components/TaskGrids'
import useData from '../api/useData'




const Dashboard = () => {
  const{ tasks } = useData();

  
  return (
    <>
  <TaskGrids tasks={tasks}/>
 
 
 
  </>
  )
}

export default Dashboard