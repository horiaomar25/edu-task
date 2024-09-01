"use client";
import React, { useState, useEffect } from 'react';
import { Box, Grid, Skeleton, Typography } from '@mui/material';
import DashBoardTable from './DashBoardTable';
import Calendar from './Calendar';
import DashBoardHeader from './DashBoardHeader';

const DashboardGrid = ({ tasks, isLoading }) => {
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
        alignItems: 'center',
        padding: "20px"
      }}
    >
      {isLoading || !isMounted ? (
        <Typography  data-testid="loading-heading" variant="h6" sx={{ marginBottom: '20px' }}>Loading...</Typography>
      ) : null}
      <Box
        sx={{
          width: '97%',
          borderRadius: '7px',
          padding: '20px',
          boxShadow: "rgba(6, 24, 44, 0.1) 0px 0px 0px 2px, rgba(6, 24, 44, 0.1) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
        }}
      >
        {isLoading || !isMounted ? (
          <Skeleton
            sx={{
              borderRadius: '7px',
              width: '100%',
              height: '60px', // Adjust height to match the height of DashBoardHeader
            }}
          />
        ) : (
          <DashBoardHeader />
        )}
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
                    borderRadius: '10px',
                    width: '100%',
                    margin: '20px 0',
                    padding: '20px',
                  }}
                  key={index}
                />
              ))
            ) : (
              <DashBoardTable tasks={combinedTasks} completedTasks={handleCompletedTasks} />
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              padding: '20px',
              width: '97%',
              borderRadius: '7px',
              marginTop: "24px"
            }}
          >
            {isLoading || !isMounted ? (
              <Skeleton
                sx={{
                  borderRadius: '7px',
                  width: '100%',
                  height: '400px', // Adjust height to match the height of the Calendar component
                }}
              />
            ) : (
              <Calendar />
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardGrid;