import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Comments from './Comments';
import FaceIcon from '@mui/icons-material/Face';

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
        width: '900px',
        height: '500px',
        boxShadow: '0 2px, 4px,0',
        position: 'fixed',
        display: 'flex',
       
     
        
          flexDirection:{xs:'column', md:'row'},// Displaying items side by side
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
            label={`end: ${formattedDate}`}
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
    

      <div style={{ flex: 1, marginLeft: '20px', display: 'flex', flexDirection: 'column' }}>
        <h3>Comments</h3>
         
        <div style={{border:'2px solid black', padding:'15px', borderRadius:'8px', backgroundColor:'gray'}}

        > 
        <span><FaceIcon fontSize='small' sx={{marginBottom:'20px'}}/></span>
       {/* eslint-disable-next-line react/no-unescaped-entities */}
        Thinking of 'The Very Hungry Caterpillar' for our next story time! 🐛📖 </div>


        {/* <Comments /> Render your comments component here */}

        {/* Input field for comments
        <TextField
          id="comment-input"
          label="Enter Comment"
          variant="outlined"
          style={{ marginTop: '10px' }}
        />
        <Button variant="contained" color="primary" onClick={handleCommentSubmit} style={{ marginTop: '10px' }}>
          Submit
        </Button> */}
      </div>
    </Box>
  );
};

export default BigTaskCard;
