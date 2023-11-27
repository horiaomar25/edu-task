import React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const SmallTaskCard = ({ task }) => {
    console.log(task)
  return (
    <div style={{ borderRadius: '8px', width: '90%', paddingLeft: '20px', marginBottom: '10px' }}>
    <span style={{display: "flex"}} >
      <p>{task.task_name}</p> <Checkbox {...label}  color="success" />
     
      
    </span>
    <hr/>
  </div>
);
};
  


export default SmallTaskCard;