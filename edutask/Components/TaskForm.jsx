import React, { useState, forwardRef } from 'react';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';

const TaskForm = forwardRef(({ createTask, handleClose }, ref) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");
  const [taskType, setTaskType] = useState("");

  const handleSubmit = async (event) => {
    
    if (!taskName || !taskDescription || !taskDueDate || !taskType) {
      alert("Please fill in all fields");
      return;
    }

    const formattedDueDate = new Date(taskDueDate).toISOString();
    
    try {
      await createTask({
        task_name: taskName,
        task_description: taskDescription,
        task_date: formattedDueDate,
        task_type: taskType,
        completed: false,
      });
      handleClose();
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

  return (
    <Box
    data-testid="task-form"
    variant="section"
      ref={ref}
      
      style={{
        backgroundColor: "white",
        padding: "3em 2em",
        border: "1px solid black",
        borderRadius: "10px",
        maxWidth: "500px",
        width: "100%",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 10,
      }}
      role="dialog"
      aria-labelledby="form-title"
    >
      <Box
      variant="div"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "1em",
        }}
      >
        <h1 id="form-title">Add Task</h1>
        <button
          onClick={handleClose}
          data-testid="close-button"
          aria-label="Close"
          style={{
            background: "transparent",
            border: "none",
            fontSize: "30px",
            cursor: "pointer",
          }}
        >
          &times;
        </button>
      </Box>
      <form onSubmit={handleSubmit} data-testid="create-task-form">
        <TextField
          data-testid="task-name-input"
          label="Task Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <TextField
          data-testid="task-description-input"
          label="Task Description"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <TextField
          data-testid="task-due-date-input"
          label="Task Due Date"
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={taskDueDate}
          onChange={(e) => setTaskDueDate(e.target.value)}
        />
        <TextField
          data-testid="task-type-select"
          label="Task Type"
          select
          variant="outlined"
          fullWidth
          margin="normal"
          value={taskType}
          onChange={(e) => setTaskType(e.target.value)}
        >
          <MenuItem value="Daily">Daily</MenuItem>
          <MenuItem value="Weekly">Weekly</MenuItem>
        </TextField>
        <Button
          sx={{ float: "right", mt: 2 }}
          type="submit"
          variant="outlined"
          data-testid="add-task-button"
        >
          Add Task
        </Button>
      </form>
    </Box>
  );
});

TaskForm.displayName = "TaskForm";

export default TaskForm;