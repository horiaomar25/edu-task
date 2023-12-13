import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';





const BigTaskCard = ({ task, handleClose }) => {
  const date = new Date(task.task_date);
  const options = { weekday: 'short', day: 'numeric', month: 'short' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  const handleCommentSubmit = () => {
    // Implement the logic to handle comment submission here
  };

  return (
    <Box
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
        boxShadow: '0 2px, 4px,0',
        position: 'fixed',
        display: 'flex',
       
     
        
          flexDirection:{xs:'column', md:'column'},// Displaying items side by side
          overflow: 'auto', // Enable scroll if content exceeds height
        wordWrap: 'break-word', // Wrap long words to prevent overflow
        whiteSpace: 'pre-wrap', // Maintain whitespace and wrap lines
      
          
      }}
    >
      <div style={{ flex: 1 }}>
        <button
            onClick={handleClose}
            id="close-button"
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: '40px',
              float: 'right',
            }}
          >
            &times;
          </button>
        <div>
          <h1>{task.task_name}</h1>
         
          
          <hr />
        </div>

        <p>{task.task_description}</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Chip
            label={`${formattedDate}`}
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
           <hr />
        </div>
      </div>
    

 
     
    </Box>
  );
};

export default BigTaskCard;

    
