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
import { useTaskContext } from "../Context/TaskContext";
import { useState } from 'react';


export default function DropDownMenu({ task }) {
  const { delTask, completeTask } = useTaskContext(); // Use context to get functions
  // State to toggle dropdown menu on Taskcard
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // State to Open Edit Form Modal.
  const [modalOpen, setModalOpen] = useState(false);



  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleEditClose = () => {
    setModalOpen(false);
  };



  // Delete Task
  const handleDelete = () => {
    // Implement deletion logic and pass task ID to delTask function
    delTask(task.id);
  };

  // Setting State for Alert
  const [alertOpen, setAlertOpen] = useState(false);

  // Complete Task when Ticketing checkbox.
  // Success Message when tick complete checkbox.
  const handleTaskComplete = () => {
    completeTask(task.id);
    setAlertOpen(true); // Display the alert when the task is completed
    setTimeout(() => {
      setAlertOpen(false); // Close the alert after 5 seconds
    }, 10000);
  };

  const handleCloseAlert = () => {
    setAlertOpen(false); // Close the alert
  };

  // State to open close BigTaskCard
  const [expandOpen, setExpandOpen] = useState(false)

  // To toggle the open and close of BigTaskCard
  const handleOpenExpand = () => {
    setExpandOpen(true)

  }

  const handleCloseExpand = () => {
    setExpandOpen(false)
  }

  return (
    <div>
      <MoreVertIcon
       data-testid="more-options-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      />

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => { handleClose(); handleOpenExpand(); }}>
          <OpenInFullIcon fontSize='small' sx={{ margin: '5px' }} />
          Open
        </MenuItem>
        <MenuItem onClick={() => { handleClose(); handleOpen(); }}>
          <EditIcon fontSize='small' sx={{ margin: '5px' }} />
          Edit
        </MenuItem>
        <MenuItem onClick={() => { handleClose(); handleDelete();  }} data-testid="delete-task-button">
          <DeleteIcon fontSize='small' sx={{ margin: '5px' }} />
          Delete
        </MenuItem>
        <MenuItem onClick={() => { handleClose(); handleTaskComplete(); }} data-testid="mark-complete-button">
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
        >
          <span style={{ display: 'flex', alignItems: 'center' }}>
            Completed
            <DoneIcon fontSize='small' sx={{ margin: '5px' }} /> </span>
        </Alert>
      </Slide>

      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <EditForm
          handleClose={handleEditClose}
          task={task}

          style={{ marginLeft: "10px" }}
        />
      </Modal>

      <Modal open={expandOpen}>

        <BigTaskCard
          handleClose={handleCloseExpand}
          task={task}

        />
      </Modal>
    </div>
  );
}