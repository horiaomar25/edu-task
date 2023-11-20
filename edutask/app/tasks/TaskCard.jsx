"use client";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';


const TaskCard = ({ task }) => {
  console.log('TaskCard:', task);
  return (
    <>

        


    <Card sx={{ minWidth: 275, margin: '8px'}}>
      <CardContent>
       
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            {task.task_name}                                              
     </Typography>
        <Typography variant="body2">
      {task.task_name}    
        </Typography>

         <Typography sx={{ mb: 1.5 }} color="text.secondary">
       
        </Typography>

      </CardContent>
      {/* <CardActions></CardActions> */}
       {/* chip to placed in here*/}
      
    </Card>
    </>
  )
    
  
}


export default TaskCard