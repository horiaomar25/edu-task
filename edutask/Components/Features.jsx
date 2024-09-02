import { Typography, Card, CardContent, CardActions, Box } from '@mui/material';
import React from 'react';
import taskicon from '../assets/taskicon.png';
import dashboardicon from '../assets/dashboardicon.png';
import Image from 'next/image';

const Features = () => {
  return (
    <>
      <Typography variant='h2' sx={{ fontSize: '2.5rem', textAlign: 'center', marginTop: '15px' }}>
        Features
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "stretch", gap: "20px", padding: "20px", flexDirection:{xs:"column", md:"row", lg:"row"} }}>
        <Card sx={{ flex: 1, border: "1px solid black", background: "#E4F0FA", display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flexGrow: 1 }}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: "10px" }}>
              <Image src={taskicon} alt="task icon" width={100} />
            </Box>
            <Typography variant="h5" component="div" sx={{ paddingBottom: "10px", textAlign: "center" }}>
              Tasks
            </Typography>
            <Typography variant="body1" sx={{ minWidth: "10px" }}>
              Easily organize your workload by entering task names, detailed descriptions, and assigned dates.
            </Typography>
            <Typography variant="body1" sx={{ minWidth: "10px" }}>
              Stay on top of your tasks and boost your productivity with EduTask’s intuitive task management system.
            </Typography>
          </CardContent>
          <CardActions>
  
          </CardActions>
        </Card>

        <Card sx={{ flex: 1, border: "1px solid black", background: "#c88aef", display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flexGrow: 1 }}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: "10px" }}>
              <Image src={dashboardicon} alt="task icon" width={100} />
            </Box>
            <Typography variant="h5" component="div" sx={{ paddingBottom: "10px", textAlign: "center" }}>
              DashBoard
            </Typography>
            <Typography variant="body1" sx={{ minWidth: "10px" }}>
              Navigate effortlessly to the taskboard for detailed task management.
            </Typography>
            <Typography variant="body1" sx={{ minWidth: "10px" }}>
              Quickly access your top 4 tasks with the task grid.
            </Typography>
            <Typography variant="body1" sx={{ minWidth: "10px" }}>
              The Dashboard is your command center for managing your day and week with ease.
            </Typography>
          </CardContent>
          <CardActions>
         
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default Features;