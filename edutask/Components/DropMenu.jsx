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

export default function DropMenu({ task, taskList, delTask, completedTask }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [expandOpen, setExpandOpen] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleOpen = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleAlertOpen = () => setAlertOpen(true);
  const handleAlertClose = () => setAlertOpen(false);
  const handleExpandOpen = () => setExpandOpen(true);
  const handleExpandClose = () => setExpandOpen(false);

  const handleTaskUpdate = (updatedTask) => {
    taskList(updatedTask);
    handleCloseModal();
  };

  const handleDelete = () => {
    delTask(task.id);
    handleClose();
  };

  const handleTaskComplete = () => {
    completedTask(task.id);
    handleClose();
    handleAlertOpen();
    setTimeout(handleAlertClose, 10000);
  };

  return (
    <>
      <button
        data-testid="more-options-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        aria-label="More options for the task"
        onClick={handleClick}
        onKeyDown={(e) => e.key === 'Enter' && handleClick(e)}
        style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
      >
        <MoreVertIcon tabIndex="-1" />
      </button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        aria-label="task-menu"
      >
        <MenuItem data-testid="menu-item-open" onClick={() => { handleClose(); handleExpandOpen(); }}>
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
        <MenuItem data-testid="menu-item-close" onClick={handleClose}>
          <button
            id="close-button"
            style={{ background: "transparent", border: "none", fontSize: "20px" }}
          >
            &times;
          </button>
          Close Menu
        </MenuItem>
      </Menu>

      <Slide direction="up" in={alertOpen} mountOnEnter unmountOnExit>
        <Alert
          severity="success"
          onClose={handleAlertClose}
          sx={{ position: "fixed", bottom: "20px", left: "20px", zIndex: 9999 }}
          role="alert"
          aria-live="assertive"
          data-testid="completion-alert"
        >
          <span style={{ display: 'flex', alignItems: 'center' }}>
            Completed
            <DoneIcon fontSize='small' sx={{ margin: '5px' }} />
          </span>
        </Alert>
      </Slide>

      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="edit-form-modal-title"
        aria-describedby="edit-task"
        aria-modal="true"
        keepMounted={false}
        data-testid="edit-form-modal"
      >
        <EditForm
          handleClose={handleCloseModal}
          task={task}
          onTaskUpdate={handleTaskUpdate}
        />
      </Modal>

      <Modal
        open={expandOpen}
        onClose={handleExpandClose}
        aria-labelledby="big-task-card"
        aria-describedby="task-details"
        data-testid="big-task-modal"
      >
        <BigTaskCard
          handleClose={handleExpandClose}
          task={task}
        />
      </Modal>
    </>
  );
}
