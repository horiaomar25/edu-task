"use client";
import * as React from "react";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";

import SmallTaskCard from "./SmallTaskCard";

import AddWeekNumber from "./Calendar";

import TaskHeader from "./TaskHeader";

const TaskGrids = ({ tasks, completed }) => {
  const dailyTasks = tasks
    .filter((task) => task.task_type === "Daily")
    .slice(0, 3);

  const weeklyTasks = tasks
    .filter((task) => task.task_type === "Weekly")
    .slice(0, 3);

    const completedTask = tasks.filter((task) => task.completed === true);

  return (
    <>
      {/* This div is holding all element including TaskHeader*/}
      <div>
        <TaskHeader/>
       
        {/* This box represents the all the element in the dashboard*/}
        <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '30px',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              border: '1px solid black',
              marginTop: { xs: '20px', md: 0 },
              borderRadius: '10px',
              backgroundColor: '#E2D7F1',
              width: '90%', // Adjusted width for full-width on small screens
              margin:'20px'
            }}
          >
            <h1 style={{ paddingLeft: '20px' }}>Daily Tasks</h1>
            {dailyTasks.map((task) => (
              <SmallTaskCard key={task.id} task={task} completedTasks={completed}  />
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              border: '1px solid black',
              marginTop: { xs: '10px', md: 0 },
              borderRadius: '10px',
              backgroundColor: '#E2D7F1',
              width: '90%', // Adjusted width for full-width on small screens
              margin:'20px' // Adjusted width for full-width on small screens
            }}
          >
            <h1 style={{ padding: '20px',margin:0 }}>Weekly Tasks</h1>
            {weeklyTasks.map((task) => (
              <SmallTaskCard key={task.id} task={task} completedTasks={completed}  />
            ))}
          </Box>
        </Grid>
      </Grid>


          <Grid
            item
            xs={12}
            md={4}
            sx={{
              padding: "20px",
              height: { xs: "auto", sm: "50%", md: "100%" }, // Responsive height
              width: { xs: "100%", sm: "50%", md: "30%" }, // Responsive width
              maxWidth: { xs: "100%", sm: "50%", md: "100%" }, // Max width for md screen
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                border: "1px black solid",
                marginTop: { xs: "10px", md: 0 },
                borderRadius: "7px",
                padding: "20px",
               
              }}
            >
              <AddWeekNumber />
            </Box>
           
  

          </Grid>
        </Box>
      </div>
    </>
  );
};

export default TaskGrids;
