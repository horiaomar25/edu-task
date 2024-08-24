import React, { useState, forwardRef } from 'react';
import Button from "@mui/material/Button";
import { useData } from '../Hooks/useData'; // Ensure this path is correct

const EditForm = forwardRef(function EditForm({ task, handleClose, onTaskUpdate }, ref) {
  const { updateTask } = useData();

  const [taskName, setTaskName] = useState(task.task_name || "");
  const [taskDescription, setTaskDescription] = useState(task.task_description || "");
  const [taskDueDate, setTaskDueDate] = useState(task.task_date || "");
  const [taskType, setTaskType] = useState(task.task_type || "");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formattedDueDate = new Date(taskDueDate).toISOString(); // Ensure date is properly formatted

    try {
      await updateTask(task.id, {
        task_name: taskName,
        task_description: taskDescription,
        task_date: formattedDueDate,
        task_type: taskType,
      });

      onTaskUpdate({
        id: task.id,
        task_name: taskName,
        task_description: taskDescription,
        task_date: formattedDueDate,
        task_type: taskType,
      });

      handleClose();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div
      ref={ref}
      data-testid="edit-form-component"
      style={{
        backgroundColor: "white",
        top: "50%",
        left: "50%",
        padding: "3em 2em",
        border: "1px solid black",
        transform: "translate(-50%, -50%)",
        borderRadius: "10px",
        zIndex: "10",
        maxWidth: "80%",
        width: "500px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        position: "fixed",
      }}
    >
      <div
        style={{
          display: "flex",
          padding: "5px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Edit Task</h1>
        <button
          onClick={handleClose}
          data-testid="close-button"
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

      <form onSubmit={handleSubmit} role='form'>
        <label htmlFor="taskName">Task Name</label>
        <input
          style={{ width: "100%", height: "50px", fontSize: "16px" }}
          id="taskName"
          name="taskName"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <label htmlFor="taskDescription" style={{ display: "block", marginTop: "1em" }}>Task Description</label>
        <textarea
          style={{ width: "100%", height: "50px", fontSize: "16px" }}
          id="taskDescription"
          name="taskDescription"
          placeholder="Task Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />

        <label htmlFor="taskDueDate" style={{ display: "block", marginTop: "1em" }}>Task Due Date</label>
        <input
          style={{ width: "100%", height: "50px" }}
          type="date"
          id="taskDueDate"
          name="taskDueDate"
          value={taskDueDate}
          onChange={(e) => setTaskDueDate(e.target.value)}
        />

        <label htmlFor="taskType" style={{ display: "block", marginTop: "1em" }}>Task Type:</label>
        <select
          style={{ width: "100%", height: "40px", marginBottom: "15px" }}
          id="taskType"
          name="taskType"
          value={taskType}
          onChange={(e) => setTaskType(e.target.value)}
        >
          <option value="" disabled>Select Task Type</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
        </select>

        <Button
          sx={{ float: "right" }}
          type="submit"
          variant="outlined"
          data-testid="save-button"
        >
          Save
        </Button>
      </form>
    </div>
  );
});

export default EditForm;
