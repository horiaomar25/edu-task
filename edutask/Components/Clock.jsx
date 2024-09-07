"use client";
import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

const Clock = () => {
  const [ctime, setTime] = useState(new Date().toLocaleTimeString());

  const updateTime = () => {
    setTime(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    const timer = setInterval(updateTime, 1000); // Update every second
    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <Box
    data-testid="dashboard-clock"
      sx={{
        backgroundColor: 'black', // Slightly opaque black background
        color: 'white',           // White text color for contrast
        display: 'flex',          // Flexbox to center the text
        justifyContent: 'center',
        alignItems: 'center',
        width: {
          xs: '100%', // Full width for extra-small screens
          sm: '90%',  // Adjust width for small screens
          md: '100%',  // Adjust width for medium screens
          lg: '100%',  // Adjust width for large screens
        },
        height: {
          xs: '150px', // Height for extra-small screens
          sm: '150px', // Height for small screens
          md: '200px', // Height for medium screens
          lg: '250px', // Height for large screens
        },
        borderRadius: '10px',     // Optional rounded corners
        fontSize: {
          xs: '1.5rem', // Font size for extra-small screens
          sm: '1.5rem', // Font size for small screens
          md: '1.5rem',   // Font size for medium screens
          lg: '2.5rem', // Font size for large screens
        },
        marginTop: '10px',        // Space above the clock
        margin: '0 auto',         // Center horizontally
      }}
    >
      <h1>{ctime}</h1>
    </Box>
  );
};

export default Clock;
