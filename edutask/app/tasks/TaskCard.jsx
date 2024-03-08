"use client";

import CardContent from "@mui/material/CardContent";
import * as React from "react";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";


import DropDownMenu from "./Components/DropMenu";


const TaskCard = ({ task, taskList, delTask, completedTask }) => {
  const date = new Date(task.task_date);
  // Get the date in a formatted string (YYYY-MM-DD)
  const options = { weekday: 'short', day: 'numeric', month: 'short' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

 

  return (
    <>
   
        <CardContent
          sx={{
            borderRadius: "8px",
            boxShadow:
              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
            marginBottom: "30px",
            width: '100%'
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
          >
         <DropDownMenu task={task} taskList={taskList} delTask={delTask} completedTask={completedTask}/>
          </button>

          <Typography
            variant="h5"
            component="div"
            sx={{ marginBottom: "10px" }}
          >
            {task.task_name}
          </Typography>

          <Typography variant="body2"
          sx={{marginBottom:'20px'}}
          >
            {task.task_description}
            </Typography>


        
            <div style={{ display: "flex", alignItems: "center" }}>
              <Chip
                label={ ` ${formattedDate}`}
                size="small"
                sx={{ marginTop: "2px", marginRight: "100px", backgroundColor: '#DBCDF0', '& .MuiChip-label': { // Selecting the Chip label using the default MuiChip-label class
                  fontWeight: 'bold',}}} // Setting the font weight to bold }}
              />
          </div>
        </CardContent>
    

    </>
  );
};

export default TaskCard;
