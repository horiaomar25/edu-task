"use client";
import React, { useState, useEffect } from 'react';
import { Box, Grid, Skeleton, Typography } from '@mui/material';
import DashBoardTable from './DashBoardTable';
import Calendar from './Calendar';
import DashBoardHeader from './DashBoardHeader';
import Clock from './Clock';

const DashBoardGrid = ({ tasks, isLoading }) => {
  const [completed, setCompleted] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setCompleted(tasks.filter((task) => task.completed).map((task) => task.id));
  }, [tasks]);

  const handleCompletedTasks = (taskId) => {
    setCompleted((prev) => [...prev, taskId]);
  };

  const combinedTasks = tasks.map((task) => ({
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
        padding: '20px',
        width: '100%',
      }}
    >
      {/* Display loading message */}
      {isLoading || !isMounted ? (
        <Typography data-testid="loading-heading" variant="h6" sx={{ marginBottom: '20px' }}>
          Loading...
        </Typography>
      ) : null}

      {/* Responsive Grid layout */}
      <Grid container spacing={3} sx={{ width: '100%' }}>
        {/* Header and Clock */}
        <Grid item xs={12} md={6}>
          {isLoading || !isMounted ? (
            <Skeleton
              sx={{
                borderRadius: '7px',
                width: '100%',
                height: '60px', // Adjust height to match DashBoardHeader and Clock height
              }}
            />
          ) : (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                borderRadius: '7px',
              }}
            >
              <DashBoardHeader />
            </Box>
          )}
        </Grid>

        {/* Clock */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              padding: '20px',
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
              <Clock />
            )}
          </Box>
        </Grid>

        {/* Task Table */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              padding: '20px',
              borderRadius: '7px',
              // Ensure the table occupies full width within its grid item
              width: '100%',
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

        {/* Calendar */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              padding: '20px',
              borderRadius: '7px',
              // Ensure the calendar occupies full width within its grid item
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end', // Push the calendar to the right
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
              <Calendar />
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashBoardGrid;
