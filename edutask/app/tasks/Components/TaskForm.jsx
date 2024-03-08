import Button from "@mui/material/Button";
import { useState } from "react";
import useData from "../../Custom Hooks/useData";

const TaskForm = ({ handleClose }) => {
  // POST request for Form Data to be sent to the server
  const { createTask } = useData();

  // useState for each input field of the form to send a POST request to the server.

  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");
  const [taskType, setTaskType] = useState("");

  const handleSubmit = (event) => {

    const formattedDueDate = new Date(taskDueDate);
    createTask({
      task_name: taskName,
      task_description: taskDescription,
      task_date: formattedDueDate,
      task_type: taskType,
    });

    // Check if any of the form fields are empty
  if (!taskName || !taskDescription || !taskDueDate || !taskType) {
    // Perform necessary actions when the form is incomplete
    // For instance, showing an error message or preventing form submission
    alert("Please fill in all fields");
    return; // Prevent form submission if fields are incomplete
  }
    

    // Clear form inputs after task creation
    setTaskName("");
    setTaskDescription("");
    setTaskDueDate("");
    setTaskType("");
  };



  return (
    <div
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
        boxShadow: "0 2px, 4px,0",
        position: "fixed",
      }}
    >
      <div
        style={{
          display: "flex",
          padding: "5px ",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Add Task</h1>
        <button
          onClick={handleClose}
          id="close-button"
          style={{
            background: "transparent",
            border: "none",
            fontSize: "30px",
          }}
        >
          &times;
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="taskName">Task Name</label>
        <input
          style={{
            width: "400px",
            height: "50px",
            width: "100%",
            fontSize: "16px",
            
          }}
          label="Task name"
          variant="outlined"
          type="text"
          id="taskName"
          name="taskName"
          placeholder="Task Name"
          required
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
            console.log("taskName:", e.target.value); // Log the updated taskName
          }}
        />

        <label
          htmlFor="taskDescription"
          style={{ display: "block", marginTop: "1em" }}
        >
          Task Description
        </label>
        <textarea
          style={{
            width: "400px",
            height: "50px",
            width: "100%",
            fontSize: "16px",
          }}
          rows="4"
          cols="50"
          value={taskDescription}
          required
         
          onChange={(e) => setTaskDescription(e.target.value)}
        ></textarea>

        <label
          htmlFor="taskDueDate"
          style={{ display: "block", marginTop: "1em" }}
        >
          Task Due Date
        </label>
        <input
          style={{ width: "400px", height: "50px", width: "100%" }}
          type="date"
          id="taskDueDate"
          name="taskDueDate"
          placeholder="Task Due Date"
          value={taskDueDate}
          required
          onChange={(e) => {
            const formattedDate = new Date(e.target.value)
              .toISOString()
              .split("T")[0];
            setTaskDueDate(formattedDate);
            console.log("Formatted Date:", formattedDate);
          }}
        />

        <label
          htmlFor="taskType"
          style={{ display: "block", marginTop: "1em" }}
        >
          Task Type:
        </label>
        <select
          style={{
            width: "400px",
            height: "40px",
            width: "100%",
            marginBottom: "15px",
          }}
          id="select-type"
          name="task_type"
          value={taskType}
          required
          onChange={(e) => setTaskType(e.target.value)}
        >
          <option value="" disabled selected>
            Select Task Type
          </option>
          <option
            style={{
              width: "400px",
              height: "40px",
              width: "100%",
              marginBottom: "15px",
            }}
            value="Daily"
            id="daily"
          >
            Daily
          </option>
          <option
            style={{
              width: "400px",
              height: "40px",
              width: "100%",
              marginBottom: "15px",
            }}
            value="Weekly"
            id="weekly"
          >
            Weekly
          </option>
        </select>

        <Button sx={{ float: "right" }} type="submit" variant="outlined">
          Add Task
        </Button>
      </form>
    </div>
  );
};

export default TaskForm;
