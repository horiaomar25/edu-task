"use client";

import CardContent from "@mui/material/CardContent";
import * as React from "react";
import CardActions from "@mui/material/CardActions";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import EditForm from "./EditForm";
import { useState } from "react";
import Modal from "@mui/material/Modal";

const TaskCard = ({ task, taskList, delTask, completedTask }) => {
  const date = new Date(task.task_date);
  // Get the date in a formatted string (YYYY-MM-DD)
  const formattedDate = date.toISOString().split("T")[0];

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

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

  const handleTaskComplete = () => {
    // Call the completedTask function with the task ID to mark it as completed
    completedTask(task.id);
  };

  return (
    <>
      <div>
        <CardContent
          sx={{
            borderRadius: "8px",
            boxShadow:
              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
            marginBottom: "20px",
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
            onClick={handleDelete}
          >
            X
          </button>

          <Typography
            variant="h5"
            component="div"
            sx={{ marginBottom: "10px" }}
          >
            {task.task_name}
          </Typography>

          <Typography variant="body2">{task.task_description}</Typography>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Chip
                label={`due: ${formattedDate}`}
                size="small"
                sx={{ marginTop: "2px", marginRight: "100px" }}
              />

              <Button size="small" onClick={handleOpen} sx={{ marginTop: "2px"}}>
                Edit
              </Button>
              <Modal
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <EditForm
                  handleClose={handleClose}
                  task={task}
                  onTaskUpdate={handleTaskUpdate}
                  style={{ marginLeft: "10px"}}
                />
              </Modal>

              <input
                type="checkbox"
                style={{ marginLeft: "8px" }}
                checked={task.completed}
                onClick={handleTaskComplete}
              />
            </div>
          </div>
        </CardContent>
      </div>
    </>
  );
};

export default TaskCard;
