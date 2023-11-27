"use client";

import CardContent from "@mui/material/CardContent";
import * as React from "react";

import CardActions from "@mui/material/CardActions";

import Chip from '@mui/material/Chip';
import Typography from "@mui/material/Typography";
import Checkbox from '@mui/material/Checkbox';

const TaskCard = ({ task }) => {
  const date = new Date(task.task_date);
// Get the date in a formatted string (YYYY-MM-DD)
const formattedDate = date.toISOString().split('T')[0];
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <>
    <div>
      <CardContent sx={{ borderRadius:'8px',boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset' }}>
        {/* <button style={{float:"right", background: "transparent", border: "none"}}>X</button> */}
        <Typography variant="h5" component="div" sx={{ marginBottom: '10px' }}>
          {task.task_name}
        </Typography>
  
        <Typography variant="body2">
          {task.task_description}
          
        </Typography>
        <Chip label={`due: ${formattedDate}`} size="small" sx={{ marginTop: '10px' }} />
        <button style={{float:"right", background: "transparent", border:"none"}}>{"Complete:"}<Checkbox {...label}  color="success" /></button>
      </CardContent>
      <CardActions>
      
      </CardActions>
      </div>
    </>

    
  );
};

export default TaskCard;
