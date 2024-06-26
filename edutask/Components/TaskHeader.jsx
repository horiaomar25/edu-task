import React from "react";
import Image from "next/image";
import HeaderPic from "../assets/dashboardtask.png";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";
import Link from "next/link";
import useData from "@/Custom Hooks/useData";

const TaskHeader = () => {
  const { tasks } = useData();
  const taskCount = tasks.length;

  return (
    <Box
      component="section"
      sx={{
        p: 4,
        width: { xs: " 90%", md: "95%", sm: "90%" }, // Set width to full for all screen sizes
        height: "auto",
        flexShrink: 0,

        margin: "30px",
        display: "flex",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center", // Center vertically and horizontally
        gap: "20px",
        margin: { xs: "20px" },
        alignItems: "center",
      }}
    >
      <Image
        src={HeaderPic}
        alt="task"
        height={200}
        style={{
          border: "1px solid black",
          borderRadius: "8px",
          boxShadow:
            "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
          marginBottom: { xs: "20px", md: "0" },
        }}
      />
      
      <div style={{ textAlign: "center", flex: { xs: "none", md: "1" } }}>
        <h1>This Week you have {taskCount} Tasks</h1>
        <Link href="/tasks">
          <Button
            sx={{
              backgroundColor: "#8338ec",
              color: "white",
              width: "200px",
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
      </div>
    </Box>
  );
};

export default TaskHeader;
