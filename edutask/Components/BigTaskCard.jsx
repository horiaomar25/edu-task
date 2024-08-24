import React, { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

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
      data-testid="big-task-card" // Add this line
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
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Corrected box shadow value
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column', // Displaying items in a column
        overflow: 'auto', // Enable scroll if content exceeds height
        wordWrap: 'break-word', // Wrap long words to prevent overflow
        whiteSpace: 'pre-wrap', // Maintain whitespace and wrap lines
      }}
    >
      <div style={{ flex: 1, position: 'relative' }}>
        <h1>{task.task_name}</h1>
        <button
          onClick={handleClose}
          id="close-button"
          data-testid="close-button"
          style={{
            background: 'transparent',
            border: 'none',
            fontSize: '40px',
            position: 'absolute',
            top: '10px',
            right: '10px',
            cursor: 'pointer',
          }}
        >
          &times;
        </button>
        <hr />
        <p>{task.task_description}</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Chip
            label={` ${formattedDate}`}
            size="small"
            sx={{
              marginTop: '2px',
              marginRight: '100px',
              backgroundColor: '#DBCDF0',
              '& .MuiChip-label': {
                fontWeight: 'bold',
              },
            }}
          />
        </div>
      </div>
    </Box>
  );
});

// Assign a display name for easier debugging
BigTaskCard.displayName = 'BigTaskCard';

export default BigTaskCard;