import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTaskContext } from "../Context/TaskContext";

const TaskNumber = () => {
  const { tasks } = useTaskContext();

 // Filter out completed tasks to get the count of active tasks
 const activeTaskCount = tasks.filter(task => !task.completed).length;


  return (
    <Box component="section" data-testid="dashboard-header">
      <Box
        component="div"
        sx={{
          width: '100%',
          borderRadius: '7px',
          padding: '2rem',
          boxShadow:
            "rgba(6, 24, 44, 0.1) 0px 0px 0px 2px, rgba(6, 24, 44, 0.1) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
          backgroundColor: '#D9D2FF',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '200px', // Consistent height
          marginRight:'20px'

        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Roboto", sans-serif', // Ensure consistency in font family
            fontWeight: 500, // Match font weight for consistency
            fontSize: '1.5rem', // Adjust font size for the header
            color: 'black',
            marginBottom: '1rem',
          }}
        >
          Total Tasks This Week
        </Typography>
        <Typography
          component={"p"}
          sx={{
            fontFamily: '"Poppins", sans-serif', // Ensure consistency in font family
            fontSize: '2.5rem', // Match font size for the task count
            fontWeight: 700, // Make it bold to stand out
            color: 'color',
          }}
        >
          {activeTaskCount}
        </Typography>
      </Box>
    </Box>
  );
};

export default TaskNumber;
