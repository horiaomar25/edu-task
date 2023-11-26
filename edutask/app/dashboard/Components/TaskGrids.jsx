"use client"
import * as React from "react";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";

import SmallTaskCard from "./SmallTaskCard";

const TaskGrids = ({ tasks }) => {
  const dailyTasks = tasks.filter(task => task.task_type === 'Daily').slice(0, 3);
  
 
  const weeklyTasks = tasks.filter(task => task.task_type === 'Weekly').slice(0, 3);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        margin: "30px",
        width: "70%",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box sx={{ border: "1px solid black" }}>
            <h1>Daily</h1>
            {dailyTasks.map(task => (
          <SmallTaskCard key={task.id} task={task} />
        ))}
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ border: "1px solid black" }}>
            <h1>Weekly</h1>
            {weeklyTasks.map(task => (
          <SmallTaskCard key={task.id} task={task} />
        ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TaskGrids;
