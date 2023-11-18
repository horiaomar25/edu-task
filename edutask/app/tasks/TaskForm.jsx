import TextField from "@mui/material/TextField";
import Textarea from "@mui/material/TextareaAutosize";
import { useState } from "react";

const TaskForm = ({handleClose}) => {

  

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
          padding: "10px 15px",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid black",
        }}
      >
        <h1>Add Task</h1>
        <button onClick={handleClose} id="close-button" style={{ background: "transparent" }}>
         
          &times;
        </button>
      </div>
      <form>
        <label htmlFor="taskName">Task Name</label>
        <TextField
          sx={{ width: "400px", height: "50px", width: '100%'}}
          label="Task name"
          variant="outlined"
          type="text"
          id="taskName"
          name="taskName"
          placeholder="Task Name"
        />

        <label htmlFor="taskDescription" style={{display: 'block', marginTop: '1em'}}>Task Description</label>
        <textarea style={{ width: "400px", height: "50px", width: '100%'}} rows="4" cols="50">

</textarea>
        

        <label htmlFor="taskDueDate" style={{display: 'block', marginTop: '1em'}}>Task Due Date</label>
        <input
          style={{ width: "400px", height: "50px",width: '100%' }}
          type="date"
          id="taskDueDate"
          name="taskDueDate"
          placeholder="Task Due Date"
        />

        <label htmlFor="taskType" style={{display: 'block', marginTop: '1em'}}>Task Type:</label>
        <select  style={{width: '400px', height: '50px', width: '100%'}}id="select-type" name="task_type">
          <option value="Daily" id="daily">
            Daily
          </option>
          <option value="Weekly" id="weekly">
            Weekly
          </option>
        </select>

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
