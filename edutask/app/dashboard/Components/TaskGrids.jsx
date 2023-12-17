"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SmallTaskCard from "./SmallTaskCard";
import AddWeekNumber from "./Calendar";
import TaskHeader from "./TaskHeader";
import { Skeleton } from "@mui/material";

const TaskGrids = ({ tasks, completed, isLoading }) => {
  const dailyTasks = tasks.filter((task) => task.task_type === "Daily").slice(0, 3);
  const weeklyTasks = tasks.filter((task) => task.task_type === "Weekly").slice(0, 3);
 

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '30px',
        alignItems: 'center',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              border: '1px solid black',
              borderRadius: '10px',
              backgroundColor: '#E2D7F1',
              width: '90%',
              margin: '20px',
            }}
          >
            <h1 style={{ paddingLeft: '20px' }}>Daily Tasks</h1>
            {isLoading ? (
         
         Array.from({ length: 5 }).map((_, index) => (
           <Skeleton  
            sx={{
              border: '1px solid black',
              padding: '20px',
              width: '90%',
              margin: '20px',
              borderRadius: '10px',
             
          
            }}
            key={index} />
         ))
       ) : (
            dailyTasks.map((task) => (
              <SmallTaskCard key={task.id} task={task} completedTasks={completed} />
            ))
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
            
          
              backgroundColor: '#E2D7F1',
              width: '90%',
              margin: '20px',
            }}
          >
            <h1 style={{ padding: '20px', margin: 0 }}>Weekly Tasks</h1>
            {isLoading ? (
         
         Array.from({ length: 5 }).map((_, index) => (
           <Skeleton  
            sx={{
             
              padding: '20px',
              width: '90%',
              margin: '20px',
              
             
          
            }}
            key={index} />
         ))
       ) : (
            weeklyTasks.map((task) => (
              <SmallTaskCard key={task.id} task={task} completedTasks={completed} />
            ))
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              border: '1px black solid',
              borderRadius: '7px',
              padding: '20px',
       
              width: '90%',
              margin: '20px',
            }}
          >
            <AddWeekNumber />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              border: '1px black solid',
              borderRadius: '7px',
              padding: '35px',
         
              width: '90%',
              margin: '20px',
            }}
          >
            <TaskHeader />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TaskGrids;
