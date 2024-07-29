"use client";
import React, { useState, useEffect } from 'react';
import { Box, Grid, Skeleton } from '@mui/material';
import AccessibleTable from './TaskTable';

import Calendar from './Calendar';
import TaskHeader from './TaskHeader';

const TaskGrids = ({ tasks, isLoading }) => {
  const [completed, setCompleted] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setCompleted(tasks.filter(task => task.completed).map(task => task.id));
  }, [tasks]);

  const handleCompletedTasks = (taskId) => {
    setCompleted((prev) => [...prev, taskId]);
  };

  const dailyTasks = tasks.filter((task) => task.task_type === "Daily").slice(0, 3);
  const weeklyTasks = tasks.filter((task) => task.task_type === "Weekly").slice(0, 3);

  const combinedTasks = tasks.map(task => ({
    ...task,
    completed: completed.includes(task.id),
  }));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '30px',
        alignItems: 'center',
        padding:"20px"
      }}
    >
      <Box
        sx={{
          width: '97%',
          borderRadius: '7px',
          padding: '20px',
          boxShadow: "rgba(6, 24, 44, 0.1) 0px 0px 0px 2px, rgba(6, 24, 44, 0.1) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
        }}
      >
        <TaskHeader />
      </Box>
      <Grid container spacing={2} sx={{ marginTop: '20px' }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              padding: '20px',
              width: '100%',
              
              borderRadius: '7px',
            }}
          >
            {isLoading || !isMounted ? (
              Array.from({ length: 6 }).map((_, index) => (
                <Skeleton
                  sx={{
                    border: '1px solid black',
                    borderRadius: '10px',
                    width: '100%',
                    margin: '20px 0',
                    padding: '20px',
                  }}
                  key={index}
                />
              ))
            ) : (
              <AccessibleTable tasks={combinedTasks} completedTasks={handleCompletedTasks} />
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              padding: '20px',
              width: '97%',
              boxShadow: "rgba(6, 24, 44, 0.1) 0px 0px 0px 2px, rgba(6, 24, 44, 0.1) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
              borderRadius: '7px',
              marginTop:"24px"
            }}
          >
            <Calendar />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TaskGrids;

