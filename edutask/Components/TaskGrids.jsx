"use client";
import React, { useState, useEffect } from 'react';
import { Box, Grid, Skeleton } from '@mui/material';
import AccessibleTable from './TestTable';
import SmallTaskCard from './SmallTaskCard';
import Calendar from './Calendar';

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
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              borderRadius: '7px',
              padding: '20px',
              width: '90%',
              margin: '20px',
            }}
          >
            {isLoading || !isMounted ? (
              Array.from({ length: 6 }).map((_, index) => (
                <Skeleton
                  sx={{
                    border: '1px solid black',
                    borderRadius: '10px',
                    width: '90%',
                    margin: '20px',
                    padding: '20px',
                  }}
                  key={index}
                />
              ))
            ) : (
              <AccessibleTable tasks={combinedTasks} completedTasks={handleCompletedTasks} />
            )}
          </Box>
          <Box
            sx={{
              border: '1px black solid',
              borderRadius: '7px',
              padding: '20px',
              width: '90%',
              margin: '20px',
            }}
          >
            <h2 style={{ margin: 0 }}>Calendar</h2>
            <Calendar />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                backgroundColor: '#E2D7F1',
                border: '1px black solid',
                borderRadius: '7px',
                padding: '20px',
                width: '90%',
                margin: '20px',
              }}
            >
              <h2 style={{ padding: '20px', margin: 0 }}>Weekly Tasks</h2>
              {isLoading || !isMounted ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <Skeleton
                    sx={{
                      border: '1px solid black',
                      borderRadius: '10px',
                      width: '90%',
                      margin: '20px',
                      padding: '20px',
                    }}
                    key={index}
                  />
                ))
              ) : (
                weeklyTasks.map((task) => (
                  <SmallTaskCard
                    key={task.id}
                    task={task}
                    completedTasks={handleCompletedTasks}
                    isCompleted={task.completed}
                  />
                ))
              )}
            </Box>
            <Box
              sx={{
                backgroundColor: '#E2D7F1',
                border: '1px black solid',
                borderRadius: '7px',
                padding: '20px',
                width: '90%',
                margin: '20px',
              }}
            >
              <h2 style={{ paddingLeft: '20px' }}>Daily Tasks</h2>
              {isLoading || !isMounted ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <Skeleton
                    sx={{
                      border: '1px solid black',
                      padding: '20px',
                      width: '90%',
                      margin: '20px',
                      borderRadius: '10px',
                    }}
                    key={index}
                  />
                ))
              ) : (
                dailyTasks.map((task) => (
                  <SmallTaskCard
                    key={task.id}
                    task={task}
                    completedTasks={handleCompletedTasks}
                    isCompleted={task.completed}
                  />
                ))
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TaskGrids;
