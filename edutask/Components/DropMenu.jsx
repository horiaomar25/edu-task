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
    <div>
      <MoreVertIcon
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        aria-label="More options"
        onClick={handleClick}
        tabIndex="0" // Make the icon focusable
        role="button"
        onKeyDown={(e) => e.key === 'Enter' && handleClick(e)} // Handle Enter key for opening menu
        data-testid="more-options-icon"
      />
      
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-label="basic-menu"
      >
        <MenuItem  data-testid="menu-item-open" onClick={() => { handleClose(); handleOpenExpand(); }}>
          <OpenInFullIcon fontSize='small' sx={{ margin: '5px' }} />
          Open
        </MenuItem>
        <MenuItem data-testid="menu-item-edit" onClick={() => { handleClose(); handleOpen(); }}>
          <EditIcon fontSize='small' sx={{ margin: '5px' }} />
          Edit
        </MenuItem>
        <MenuItem data-testid="menu-item-delete" onClick={() => { handleClose(); handleDelete(); }}>
          <DeleteIcon fontSize='small' sx={{ margin: '5px' }} />
          Delete
        </MenuItem>
        <MenuItem data-testid="menu-item-complete" onClick={() => { handleClose(); handleTaskComplete(); }}>
          <DoneIcon fontSize='small' sx={{ margin: '5px' }} />
          Complete
        </MenuItem>
      </Menu>

      <Slide direction="up" in={alertOpen} mountOnEnter unmountOnExit>
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
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        aria-modal="true" // Indicates a modal dialog for screen readers
        keepMounted={false} // Focus handling
      >
        <EditForm
          handleClose={handleEditClose}
          task={task}
          onTaskUpdate={handleTaskUpdate}
        />
      </Modal>

      <Modal
        open={expandOpen}
        onClose={handleCloseExpand}
        aria-labelledby="big-task-card"
        aria-describedby="task-details"
      >
        <BigTaskCard
          handleClose={handleCloseExpand}
          task={task}
        />
      </Modal>
    </div>
  );
}
