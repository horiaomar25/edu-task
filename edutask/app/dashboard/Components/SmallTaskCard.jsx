import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import DoneIcon from '@mui/icons-material/Done';
import Slide from '@mui/material/Slide';
import Alert from '@mui/material/Alert';

const SmallTaskCard = ({ task, completedTasks }) => {
  const [isCardVisible, setIsCardVisible] = useState(true);
  const [alertOpen, setAlertOpen] = useState(false);

  const handleTaskComplete = () => {
    completedTasks(task.id);
    setIsCardVisible(false);
    setAlertOpen(true);
    setTimeout(() => {
      setAlertOpen(false);
    }, 5000); // Adjust the time for alert display
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  return (
    <>
      <Slide direction="up" in={isCardVisible} mountOnEnter unmountOnExit>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h3
            style={{
              border: '1px solid black',
              padding: '5px',
              width: '100%',
              margin: '20px',
              borderRadius: '10px',
              backgroundColor: '#D9C3F9',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
          
            }}
          >
            {task.task_name}
            <Checkbox
              onClick={handleTaskComplete}
       
              sx={{ float: 'right' }}
              color="success"
            />
          </h3>
        </div>
      </Slide>

      <Slide direction="up" in={alertOpen} mountOnEnter unmountOnExit>
        <Alert
          severity="success"
          onClose={handleCloseAlert}
          sx={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            zIndex: 9999,
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center' }}>
            Completed
            <DoneIcon fontSize="small" sx={{ margin: '5px' }} />
          </span>
        </Alert>
      </Slide>
    </>
  );
};

export default SmallTaskCard;


