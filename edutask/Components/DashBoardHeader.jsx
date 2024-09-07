"use client";
import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import TaskNumber from "./TaskNumber";
import TaskCompleted from "./TaskCompleted";

const DashBoardHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen size is small

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row', // Stack items vertically on mobile
        justifyContent: 'space-between',
        alignItems: isMobile ? 'flex-start' : 'center', // Align items differently on mobile
        gap: isMobile ? '8px' : '16px', // Adjust gap between items on mobile
        width: '100%',
        padding: isMobile ? '8px' : '16px', // Add padding on mobile
      }}
    >
      <TaskNumber />
      <TaskCompleted />
    </Box>
  );
};

export default DashBoardHeader;

