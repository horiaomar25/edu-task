"use client";
import * as React from "react";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";

import SmallTaskCard from "./SmallTaskCard";

import AddWeekNumber from "./Calendar";

import TaskHeader from "./TaskHeader";

const TaskGrids = ({ tasks }) => {
  const dailyTasks = tasks
    .filter((task) => task.task_type === "Daily")
    .slice(0, 3);

  const weeklyTasks = tasks
    .filter((task) => task.task_type === "Weekly")
    .slice(0, 3);

  return (
    <>
      {/* This div is holding all element including TaskHeader*/}
      <div style={{ flexGrow: 1 }}>
        <TaskHeader />
        {/* This box represents the all the element in the dashboard*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "20px",
          }}
        > 
        {/* This is the latest task container*/}
        <Grid item xs={12} sx={{ width: "100%" }}>
        <Box
  sx={{
    borderRadius: "10px",
    backgroundColor: "#E2D7F1",
    width: "100%",
    display: "flex",
    flexDirection: "row", // Set direction to row
    justifyContent: "space-between", // Space evenly between tasks
    padding: "10px", // Add padding if necessary
    alignItems: "center",
    paddingTop: "20px",
    overflowX: "hidden",
    flexDirection: { xs: "column", md: "row" },
    margin: "0 auto", // Center the box horizontally
    maxWidth: "90%", // Adjust the max-width as needed for mobile devices
  }}
>


    <h1 style={{ paddingLeft: "20px" }}>Latest Tasks</h1>

    {dailyTasks.map((task) => (
      <SmallTaskCard key={task.id} task={task} />
    ))}
  </Box>
</Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              padding: "20px",
              height: { xs: "auto", sm: "50%", md: "800px" }, // Responsive height
              width: { xs: "100%", sm: "50%", md: "30%" }, // Responsive width
              maxWidth: { xs: "100%", sm: "50%", md: "100%" }, // Max width for md screen
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                border: "1px black solid",
                marginTop: { xs: "20px", md: 0 },
                borderRadius: "7px",
                padding: "20px",
                border: "10px red solid",
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
{
  /* <Grid item xs={12} md={6}> 
       <h1>Hello World</h1>
        <Box
          sx={{
            border: "1px solid black",
            marginTop: { xs: "20px", md: 0 },
            borderRadius: "10px",
            backgroundColor: "#E2D7F1",
            width: '90%',
          }}
        >
          <h1 style={{ paddingLeft: "20px" }}>Weekly</h1>
          {weeklyTasks.map((task) => (
            <SmallTaskCard key={task.id} task={task} />
          ))}
        </Box>
      </Grid> */
}
