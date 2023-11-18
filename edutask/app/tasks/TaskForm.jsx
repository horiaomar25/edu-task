import TextField from "@mui/material/TextField";
import Textarea from "@mui/material/TextareaAutosize";

const TaskForm = ({ closeForm }) => {

  return (
    <div>
      <form>
      <button onClick={closeForm} id="close-button">&times;</button>
        <TextField
          sx={{ width: "200px" }}
          label="Task name"
          variant="outlined"
          type="text"
          id="taskName"
          name="taskName"
          placeholder="Task Name"
        />

        <label htmlFor="taskDescription">Task Description</label>
        <Textarea
          aria-label="minimum height"
          minRows={3}
          
          type="text"
          id="taskDescription"
          name="taskDescription"
          placeholder="Task Description"
        />
        

        <label htmlFor="taskDueDate">Task Due Date</label>
        <input
          type="date"
          id="taskDueDate"
          name="taskDueDate"
          placeholder="Task Due Date"
        />

        <label htmlFor="taskType">Task Priority</label>
        <select id="select-type" name="task_type">
            <option value="Daily" id="daily">Daily</option>
            <option value="Weekly" id="weekly">Weekly</option>
          </select>

      
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
