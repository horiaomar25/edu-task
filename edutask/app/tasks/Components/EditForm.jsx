import React from 'react'
import Button from "@mui/material/Button";
import {useState, useEffect} from 'react'
import useData from '../../../Custom Hooks/useData';


const EditForm = ({ task, handleClose }) => {
  const{updateTask} = useData();
  
  const [taskName, setTaskName] = useState(task.task_name || "");
  const [taskDescription, setTaskDescription] = useState(task.task_description || "");
  const [taskDueDate, setTaskDueDate] = useState(task.task_date || "");
  const [taskType, setTaskType] = useState(task.task_type || "");
  
  
    // PATCH request taken from the useData (custom hook).
    async function handleSubmit(event) {
    
    
      const formattedDueDate = new Date(taskDueDate);
    
      try {
        const taskId = task.id; // Assuming task.id holds the identifier of the task to update
    
        // Update the task using the updateTask function from the useData hook
        await updateTask(taskId, {
          task_name: taskName,
          task_description: taskDescription,
          task_date: formattedDueDate,
          task_type: taskType,
        });
    
        // Close the form after the update is successful
        handleClose();
      } catch (error) {
        console.error("Error:", error);
      }
    }
    
    
    return (
        <>
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
        <h1>Edit Task</h1>
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
          Save
        </Button>
      </form>
    </div>
        </>
    )
}

export default EditForm