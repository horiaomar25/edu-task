import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Modal from "@mui/material/Modal";
import EditForm from "./EditForm";
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import BigTaskCard from './BigTaskCard';
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import { useState } from 'react';

export default function DropMenu({ task, taskList, delTask, completedTask } ) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleEditClose = () => {
    setModalOpen(false);
  };

  const handleTaskUpdate = (updatedTask) => {
    taskList(updatedTask);
    setModalOpen(false);
  };

  const handleDelete = () => {
    delTask(task.id);
  };

  const [alertOpen, setAlertOpen] = useState(false);

  const handleTaskComplete = () => {
    completedTask(task.id);
    setAlertOpen(true);

    setTimeout(() => {
      setAlertOpen(false);
    }, 10000);
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  const [expandOpen, setExpandOpen] = useState(false);

  const handleOpenExpand = () => {
    setExpandOpen(true);
  };

  const handleCloseExpand = () => {
    setExpandOpen(false);
  };

  return (
   
      <>
      <button
 data-testid="more-options-button"
  aria-controls={open ? 'basic-menu' : undefined} // Indicates the menu is controlled by the button using state. if menu is not open it is defined as undefined.
  aria-haspopup="true" // Indicates the button opens a menu
  aria-expanded={open ? 'true' : undefined} // Indicates the menu is open
  aria-label="More options for the task" // Descriptive label for screen readers
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick(e)} // Handle Enter key for opening menu
  
  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }} // Remove default button styles
>
  <MoreVertIcon tabIndex="-1" /> {/* Ensure the icon itself is not focusable */}
</button>
      
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-label="basic-menu"
      >
        <MenuItem data-testid="menu-item-open" onClick={() => { handleClose(); handleOpenExpand(); } }>
          <OpenInFullIcon fontSize='small' sx={{ margin: '5px' }} />
          Open
        </MenuItem>
        <MenuItem data-testid="menu-item-edit" onClick={() => { handleClose(); handleOpen(); } }>
          <EditIcon fontSize='small' sx={{ margin: '5px' }} />
          Edit
        </MenuItem>
        <MenuItem data-testid="menu-item-delete" onClick={() => { handleClose(); handleDelete(); } }>
          <DeleteIcon fontSize='small' sx={{ margin: '5px' }} />
          Delete
        </MenuItem>
        <MenuItem data-testid="menu-item-complete" onClick={() => { handleClose(); handleTaskComplete(); } }>
          <DoneIcon fontSize='small' sx={{ margin: '5px' }} />
          Complete
        </MenuItem>
        <MenuItem data-testid="menu-item-close" onClick={() => { handleClose(); } }>
          <button

            id="close-button"
            style={{
              background: "transparent",
              border: "none",
              fontSize: "20px",
            }}
          >
            &times;
          </button>
          Close Menu
        </MenuItem>
      </Menu><Slide direction="up" in={alertOpen} mountOnEnter unmountOnExit>
        <Alert
          severity="success"
          onClose={handleCloseAlert}
          sx={{
            position: "fixed",
            bottom: "20px",
            left: "20px",
            zIndex: 9999,
          }}
          role="alert" // Ensure it's announced as an alert
          aria-live="assertive" // Indicate that this is important for screen readers
        >
          <span style={{ display: 'flex', alignItems: 'center' }}>
            Completed
            <DoneIcon fontSize='small' sx={{ margin: '5px' }} />
          </span>
        </Alert>
      </Slide>
      
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="edit-form-modal-title"
        aria-describedby="edit-task"
        aria-modal="true" // Indicates a modal dialog for screen readers
        keepMounted={false} // Focus handling
        data-testid="edit-form-modal"
      >
        <EditForm
          handleClose={handleEditClose}
          task={task}
          onTaskUpdate={handleTaskUpdate} />
      </Modal>
      <Modal
        open={expandOpen}
        onClose={handleCloseExpand}
        aria-labelledby="big-task-card"
        aria-describedby="task-details"
        data-testid="big-task-modal"
      >
        <BigTaskCard
          handleClose={handleCloseExpand}
          task={task} />
      </Modal>
      </>
    
  );
}
