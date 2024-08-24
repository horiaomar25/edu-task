import Button from "@mui/material/Button";
import { useState, forwardRef } from "react";
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

    const formattedDueDate = new Date(taskDueDate);
    createTask({
      task_name: taskName,
      task_description: taskDescription,
      task_date: formattedDueDate,
      task_type: taskType,
    });

    setTaskName("");
    setTaskDescription("");
    setTaskDueDate("");
    setTaskType("");
  };

  return (
    <div
      ref={ref}
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
        boxShadow: "0 2px 4px 0",
        position: "fixed",
      }}
      role="dialog"
      aria-labelledby="form-title"
    >
      <div
        style={{
          display: "flex",
          padding: "5px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 id="form-title">Add Task</h1>
        <button
          onClick={handleClose}
          id="close-button"
          style={{
            background: "transparent",
            border: "none",
            fontSize: "30px",
          }}
          aria-label="Close"
        >
          &times;
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="taskName">Task Name</label>
        <input
          style={{
            width: "100%",
            height: "50px",
            fontSize: "16px",
          }}
          type="text"
          id="taskName"
          name="taskName"
          placeholder="Task Name"
          required
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />

        <label
          htmlFor="taskDescription"
          style={{ display: "block", marginTop: "1em" }}
        >
          Task Description
        </label>
        <textarea
          style={{
            width: "100%",
            fontSize: "16px",
          }}
          rows="4"
          id="taskDescription"
          name="taskDescription"
          placeholder="Task Description"
          required
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        ></textarea>

        <label
          htmlFor="taskDueDate"
          style={{ display: "block", marginTop: "1em" }}
        >
          Task Due Date
        </label>
        <input
          style={{ width: "100%", height: "50px" }}
          type="date"
          id="taskDueDate"
          name="taskDueDate"
          placeholder="Task Due Date"
          required
          value={taskDueDate}
          onChange={(e) => {
            const formattedDate = new Date(e.target.value)
              .toISOString()
              .split("T")[0];
            setTaskDueDate(formattedDate);
          }}
        />

        <label
          htmlFor="taskType"
          style={{ display: "block", marginTop: "1em" }}
        >
          Task Type
        </label>
        <select
          style={{
            width: "100%",
            height: "40px",
            marginBottom: "15px",
          }}
          id="taskType"
          name="taskType"
          required
          value={taskType}
          onChange={(e) => setTaskType(e.target.value)}
        >
          <option value="" disabled>
            Select Task Type
          </option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
        </select>

        <Button sx={{ float: "right" }} type="submit" variant="outlined">
          Add Task
        </Button>
      </form>
    </div>
  );
});

TaskForm.displayName = "TaskForm";

export default TaskForm;