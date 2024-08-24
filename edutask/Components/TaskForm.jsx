import React, { useState, forwardRef } from 'react';
import Button from "@mui/material/Button";
import useData from "../Hooks/useData";

const TaskForm = forwardRef(({ handleClose }, ref) => {
  const { createTask } = useData();

  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");
  const [taskType, setTaskType] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!taskName || !taskDescription || !taskDueDate || !taskType) {
      alert("Please fill in all fields");
      return;
    }

    const formattedDueDate = new Date(taskDueDate).toISOString();

    createTask({
      task_name: taskName,
      task_description: taskDescription,
      task_date: formattedDueDate,
      task_type: taskType,
    });

    // Clear form fields
    setTaskName("");
    setTaskDescription("");
    setTaskDueDate("");
    setTaskType("");
  };

  return (
    <div
      ref={ref}
      data-testid="task-form"
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
      <div
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
      </div>

      <form onSubmit={handleSubmit} data-testid="create-task-form">
        <div style={{ marginBottom: "1em" }}>
          <label htmlFor="taskName">Task Name</label>
          <input
            data-testid="task-name-input"
            type="text"
            id="taskName"
            name="taskName"
            placeholder="Task Name"
            required
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            style={{ width: "100%", height: "50px", fontSize: "16px", padding: "0.5em" }}
          />
        </div>

        <div style={{ marginBottom: "1em" }}>
          <label htmlFor="taskDescription">Task Description</label>
          <textarea
            data-testid="task-description-input"
            id="taskDescription"
            name="taskDescription"
            placeholder="Task Description"
            required
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            style={{ width: "100%", fontSize: "16px", padding: "0.5em" }}
            rows="4"
          />
        </div>

        <div style={{ marginBottom: "1em" }}>
          <label htmlFor="taskDueDate">Task Due Date</label>
          <input
            data-testid="task-due-date-input"
            type="date"
            id="taskDueDate"
            name="taskDueDate"
            placeholder="Task Due Date"
            required
            value={taskDueDate}
            onChange={(e) => setTaskDueDate(e.target.value)}
            style={{ width: "100%", height: "50px" }}
          />
        </div>

        <div style={{ marginBottom: "1em" }}>
          <label htmlFor="taskType">Task Type</label>
          <select
            data-testid="task-type-select"
            id="taskType"
            name="taskType"
            required
            value={taskType}
            onChange={(e) => setTaskType(e.target.value)}
            style={{ width: "100%", height: "40px" }}
          >
            <option value="" disabled>Select Task Type</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
          </select>
        </div>

        <Button
          sx={{ float: "right" }}
          type="submit"
          variant="outlined"
          data-testid="submit-button"
        >
          Add Task
        </Button>
      </form>
    </div>
  );
});

TaskForm.displayName = "TaskForm";

export default TaskForm;
