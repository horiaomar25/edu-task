"use client";
import * as React from "react";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";

import SmallTaskCard from "./SmallTaskCard";

import AddWeekNumber from "./Calendar";

const TaskGrids = ({ tasks }) => {
  const dailyTasks = tasks
    .filter((task) => task.task_type === "Daily")
    .slice(0, 3);

  const weeklyTasks = tasks
    .filter((task) => task.task_type === "Weekly")
    .slice(0, 3);
  return (
<Box
  sx={{
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    margin: "30px",
    width: "90%", // Changed width to 100% to occupy the full width of the container
    justifyContent: "center", // To center the content horizontally
  }}
>
  <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          border: "1px solid black",
          borderRadius: "10px",
          backgroundColor: "#E2D7F1",
        }}
      >
        <h1 style={{ paddingLeft: "20px" }}>Daily</h1>
        {dailyTasks.map((task) => (
          <SmallTaskCard key={task.id} task={task} />
        ))}
      </Box>
    </Grid>
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          border: "1px solid black",
          borderRadius: "10px",
          backgroundColor: "#E2D7F1",
          marginTop: { xs: "20px", md: 0 },
        }}
      >
        <h1 style={{ paddingLeft: "20px" }}>Weekly</h1>
        {weeklyTasks.map((task) => (
          <SmallTaskCard key={task.id} task={task} />
        ))}
      </Box>
    </Grid>
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          border: "1px solid black",
          borderRadius: "7px",
          marginTop: { xs: "20px", md: 0 },
        }}
      >
        <AddWeekNumber sx={{ padding: "20px" }} />
      </Box>
    </Grid>
  </Grid>
</Box>

  );
};

export default TaskGrids;
