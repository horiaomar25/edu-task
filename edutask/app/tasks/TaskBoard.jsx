"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TaskCard from "./TaskCard";

import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const TaskBoard = () => {
  // 1. Create state to display/store the data
  const [tasks, setTasks] = useState([]);

  // 2. Fetching data from the database to display on the task board.
  const fetchTasks = async () => {
    const response = await fetch("http://localhost:3001/tasks");
    const data = await response.json();
   
    setTasks(data);
  };


  // 3. This will hand the side effect of fetching data from the database.
  useEffect(() => {
    fetchTasks();
  }, []);
 
  // 4. Need to filter the data with the different types: Weekly or Daily to make taskCard is appended to the right column.
  // const dailyTasks = tasks.filter (task => task.task_type === "Daily");
  // const weeklyTasks = tasks.filter (task => task.task_type === "Weekly");

  const dailyTasks =  tasks.filter(task => task.task_type === "Daily") 
const weeklyTasks =  tasks.filter(task => task.task_type === "Weekly") 

 
  return (
    <>
      <Box sx={{ flexGrow: 1, margin: "20px" }}>
        {" "}
        {/* set the flex-grow to 1, allowing the box to grow to fill the avaliable space*/}
        <Grid container spacing={4}>
          {" "}
          {/*Container with spacing between grid items to 3.*/}
          {/* Daily Column */}
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              padding: "20px",
              height: { xs: "auto", sm: "50%", md: "800px" }, // Responsive height for all screen sizes
              width: { xs: "100%", sm: "50%", md: "800px" }, // Responsive width for all screen sizes
              maxWidth: { xs: "100%", sm: "50%", md: "800px" }, // Max width for md screen
              boxSizing: "border-box", // Adds padding to the grid without changing width and height.
            }}
          >
            <h2 style={{ textAlign: "center" }}>Daily</h2>
            {dailyTasks.map((task, index) => (
    <TaskCard key={index} task={task}  sx={{ width: '100%'}} />
  ))}
            {/* Heading centered within each column  */}

            

       

          </Grid>
          {/* Weekly Column */}
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              padding: "20px",
              height: { xs: "auto", sm: "50%", md: "800px" }, // Responsive height
              width: { xs: "100%", sm: "50%", md: "800px" }, // Responsive width
              maxWidth: { xs: "100%", sm: "50%", md: "800px" }, // Max width for md screen
              boxSizing: "border-box",
            }}
          >
            <h2 style={{ textAlign: "center" }}>Weekly</h2>

           
            {weeklyTasks.map((task, index) => (
    <TaskCard key={index} task={task} sx={{ width: '100%'}} />
  ))}

          </Grid>
          {/* Completed Column */}
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              padding: "20px",
              height: { xs: "auto", sm: "400px", md: "800px" }, // Responsive height
              width: { xs: "100%", sm: "50%", md: "800px" }, // Responsive width
              maxWidth: { xs: "100%", sm: "50%", md: "800px" }, // Max width for md screen
              boxSizing: "border-box",
            }}
          >
            <h2 style={{ textAlign: "center" }}>Completed</h2>
            {/* <TaskCard sx={{ width: "100%" }} />
            <TaskCard sx={{ width: "100%" }} />
            <TaskCard sx={{ width: "100%" }} /> */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TaskBoard;
