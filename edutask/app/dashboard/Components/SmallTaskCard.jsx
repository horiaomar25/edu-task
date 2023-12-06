import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const SmallTaskCard = ({ task }) => {
  
  return (
    <>
  

    <div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
    <CardContent sx={{
            borderRadius: "8px",
            boxShadow:
              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
            marginBottom: "20px", 
            
          }}>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
   {task.task_date}
    </Typography>
    <Typography variant="h5" component="div">
    {task.task_name}
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
    {task.task_type}
    </Typography>
    <Typography variant="body2">
     progress bar
      <br />
      {'"comments"'}
    </Typography>
  </CardContent>
  <CardActions>
  </CardActions>
</div>
    
  </>
)
};
  


export default SmallTaskCard;  

