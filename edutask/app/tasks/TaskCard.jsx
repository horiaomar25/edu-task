"use client";

import CardContent from "@mui/material/CardContent";
import * as React from "react";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EditForm from "./EditForm";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import DropDownMenu from "./DropMenu";


const TaskCard = ({ task, taskList, delTask, completedTask }) => {
  const date = new Date(task.task_date);
  // Get the date in a formatted string (YYYY-MM-DD)
  const options = { weekday: 'short', day: 'numeric', month: 'short' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  // Open Edit Form Modal.
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleTaskUpdate = () => {
    // Pass the updated task to the parent component
    onTaskUpdate(updatedTask);
    setModalOpen(false); // Close the modal after updating
    taskList(updatedTask);
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
    completedTask(task.id);
    setAlertOpen(true); // Display the alert when the task is completed
    setTimeout(() => {
      setAlertOpen(false); // Close the alert after 5 seconds
    }, 35000);
  };

  const handleCloseAlert = () => {
    setAlertOpen(false); // Close the alert
  };
  

  return (
    <>
   
        <CardContent
          sx={{
            borderRadius: "8px",
            boxShadow:
              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
            marginBottom: "30px",
            width: '100%'
          }}
        >

          <button
            style={{
              float: "right",
              border: "none",
              background: "transparent",
              fontWeight: "600",
              fontSize: "15px",
            }}
          >
         <DropDownMenu task={task} taskList={taskList} delTask={delTask} completedTask={completedTask}/>
          </button>

          <Typography
            variant="h5"
            component="div"
            sx={{ marginBottom: "10px" }}
          >
            {task.task_name}
          </Typography>

          <Typography variant="body2"
          sx={{marginBottom:'20px'}}
          >
            {task.task_description}
            </Typography>


        
            <div style={{ display: "flex", alignItems: "center" }}>
              <Chip
                label={ ` ${formattedDate}`}
                size="small"
                sx={{ marginTop: "2px", marginRight: "100px", backgroundColor: '#DBCDF0', '& .MuiChip-label': { // Selecting the Chip label using the default MuiChip-label class
                  fontWeight: 'bold',}}} // Setting the font weight to bold }}
              />
          </div>
        </CardContent>
    

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
          This is a success alert — check it out!
        </Alert>
      </Slide>
    </>
  );
};

export default TaskCard;
