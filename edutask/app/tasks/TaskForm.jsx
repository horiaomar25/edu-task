import Button from "@mui/material/Button";
import  { useState }  from "react";

const TaskForm = ({ handleClose }) => {

  // useState for each input field of the form to send a POST request to the server.
  const [taskName, setTaskName] = useState('')
  const[taskDescription, setTaskDescription] = useState('')
  const[taskDueDate, setTaskDueDate] = useState('')
  const[taskType, setTaskType] = useState('')

// POST request for Form Data to be sent to the server
async function handleSubmit(event) {
  event.preventDefault();

  const formattedDueDate = new Date(taskDueDate).toISOString().split('T')[0];

  try {
    const response = await fetch("http://localhost:3001/tasks/", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        task_name: taskName,
        task_description: taskDescription,
        task_date: formattedDueDate,
        task_type: taskType,
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log(await response.json());
  } catch (error) {
    console.error("Error:", error);
  }
}

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
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
            console.log('taskName:', e.target.value); // Log the updated taskName
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
          onChange={(e) => {
            const formattedDate = new Date(e.target.value).toISOString().split('T')[0];
            setTaskDueDate(formattedDate);
            console.log('Formatted Date:', formattedDate);
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
          onChange={(e) => setTaskType(e.target.value)}
          
        >
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

export default TaskForm
