import React, { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { Typography, Button } from '@mui/material';

const BigTaskCard = forwardRef(({ task, handleClose }, ref) => {
  let formattedDate = 'Invalid date';
  const date = new Date(task.task_date);

  if (date && date.toString() !== 'Invalid Date') {
    formattedDate = date.toISOString().split('T')[0];
  }

  return (
    <Box
  ref={ref}
  tabIndex={-1}
  data-testid="big-task-card"
  sx={{
    backgroundColor: 'white',
    top: '50%',
    left: '50%',
    padding: '3em',
    border: '1px solid black',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    zIndex: '10',
    maxWidth: '80%',
    width: '500px',
    height: '500px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    wordWrap: 'break-word',
    whiteSpace: 'pre-wrap',
  }}
>
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    {/* Task title and Close Button in the same row */}
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="h1" sx={{ fontSize: '2rem' }}>
        {task.task_name}
      </Typography>
      <Button
        onClick={handleClose}
        id="close-button"
        data-testid="close-button"
        sx={{
          color: 'black',
          background: 'transparent',
          border: 'none',
          fontSize: '40px',
          cursor: 'pointer',
        }}
      >
        &times;
      </Button>
    </Box>

  

    {/* Task description */}
    <Typography variant="body1" >
      {task.task_description}
    </Typography>

    {/* Task details */}
    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '1em' }}>
      <Chip
        label={`${formattedDate}`}
        size="small"
        sx={{
          backgroundColor: '#DBCDF0',
          '& .MuiChip-label': {
            fontWeight: 'bold',
          },
        }}
      />
    </Box>
  </Box>
</Box>

  );
});

// Assign a display name for easier debugging
BigTaskCard.displayName = 'BigTaskCard';

export default BigTaskCard;