"use client"
import React from 'react'
import TaskBoard from './TaskBoard'
import TaskForm from './TaskForm'
import { useState } from 'react'


const Tasks = () => {
  // Create a new state variable, isFormOpen, and its setter function, setIsFormOpen.
const [isFormOpen, setIsFormOpen] = useState(false); // Initialize isFormOpen to false.

  

// open the form
function openForm() {
  setIsFormOpen(true);
}

// Close the form 
function closeForm(){
  setIsFormOpen(false);
}

  return (
    <>
    <TaskBoard openForm={openForm}/>
    {isFormOpen && <TaskForm closeForm={closeForm} />}
    </>
  )
}

export default Tasks