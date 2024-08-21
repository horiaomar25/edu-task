"use client"
import React from "react";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";
import Link from "next/link";
import useData from "../Hooks/useData";

const TaskHeader = () => {
  const { tasks } = useData();
  const taskCount = tasks.length;

  return (
    <Box
      component="section"
      sx={{
        width: { xs: "90%", md: "92%", sm: "90%" }, // Set width to full for all screen sizes
 
        height: "auto",
        flexShrink: 0,
        display: "flex",
        justifyContent: "center", // Center horizontally
        flexDirection: { xs: "column", md: "row" },
        gap: "20px",
        margin: { xs: "20px" },
      }}
    >
      <Box
        style={{
          display: "flex", // Make the content wrapper a flex container
          flexDirection: "column",
          alignItems: "center", // Center vertically and horizontally within the wrapper
          flex: { xs: "none", md: "1" }, // Only set flex for medium screens and above
        }}
      >
        <h1>This Week you have {taskCount} Tasks</h1>
        <Link href="/tasks">
          <Button
            sx={{
              backgroundColor: "#8338ec",
              color: "white",
              width: "180px",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "#6b2fbb",
                color: "white",
              },
            }}
          >
            See more
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default TaskHeader;

