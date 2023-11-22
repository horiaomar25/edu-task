"use client";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';



const TaskCard = ({task}) => {

  return (
    <>
    

    <h1>{task.task_name}</h1>
    <p>{task.task_description}</p>
        


    
    </>
  )
    
  
}


export default TaskCard