import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navigation from '../Components/Navigation';
import dashboardshot from "../assets/dashboardshot.png";
import taskboardshot from "../assets/taskboardshot.png";

import information from "../assets/information.png";

export default function Home() {
  return (
    <>
      <Navigation />
      <h1 style={{ 
        fontSize: "clamp(2rem, 5vw, 7rem)", 
        textAlign: "center", 
        fontWeight: "bold", 
        margin: "0.5rem 0", 
        letterSpacing: "-0.02em" 
      }}>
        Edu
        <span style={{ 
          paddingBottom: "0.5rem", 
          background: "linear-gradient(to right, #8e24aa, #673ab7)", 
          WebkitBackgroundClip: "text", 
          color: "transparent" 
        }}>
          Task
        </span>
      </h1>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '2rem',
        flexDirection: 'column',
      }}>
        <Link href="/dashboard">
          <Button
          role='button'
          data-testid='dashboard-button'
            sx={{
              backgroundColor: 'none',
              color: 'black',
              border: "#8338ec 1px solid",
              width: '200px',
              borderRadius: '10px',
              '&:hover': {
                backgroundColor: '#8338ec',
                color: 'white',
              },
            }}
          >
            Dashboard
          </Button>
        </Link>
        <Link href="/tasks">
          <Button
          role='button'
          data-testid='tasks-button'
            sx={{
              backgroundColor: 'none',
              color: 'black',
              border: "#8338ec 1px solid",
              width: '200px',
              borderRadius: '10px',
              '&:hover': {
                backgroundColor: '#8338ec',
                color: 'white',
              },
            }}
          >
            Tasks
          </Button>
        </Link>
      </div>
      <p style={{ textAlign: "center", margin: "1rem 0" }}>
        Simplify task management for teaching assistants, enhancing productivity and organization for a smoother school week.
      </p>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ border: "2px solid black", borderRadius: "10px", width: "100%", height: "200px", position: "relative", backgroundColor: "#8e24aa" }}>
              <span style={{ border: "1px solid black", width: "100%", height: "2px", display: "block", position: "absolute", top: "10%" }}></span>
            
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ border: "2px solid black", borderRadius: "10px", width: "100%", height: "200px", position: "relative", backgroundColor: "#8e24aa" }}>
              <span style={{ border: "1px solid black", width: "100%", height: "2px", display: "block", position: "absolute", top: "10%" }}></span>
               
            </Box>  
          </Grid>
        </Grid>
      </Box>
      <section style={{ margin: "20px", padding: "20px" }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center">
            <Image 
              src={information} 
              alt="screenshot of dashboard" 
              width={650}
           
              style={{
                borderRadius: "8px",
                boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                width: '100%',
                height: 'auto',
                marginBottom: "20px",
              }} 
            />
          </Grid>
          <Grid item xs={12} sm={6} container direction="column" justifyContent="center" alignItems="center">
            <h2 style={{ 
              fontSize: "clamp(1.5rem, 4vw, 2rem)", 
              fontWeight: "bold", 
              letterSpacing: "-0.02em", 
              marginBottom: "10px" 
            }}> 
              About
            </h2>
            <p style={{ 
              textAlign: "center", 
              maxWidth: "400px", 
              margin: "0" 
            }}> 
              This infographic, combined with EduTask, helps teaching assistants manage tasks efficiently by outlining clear communication channels and promoting effective collaboration.
            </p>
          </Grid>
        </Grid>
      </section>
      <section style={{ margin: "20px", padding: "20px" }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Grid item xs={12} sm={6} container direction="column" justifyContent="center" alignItems="center">
            <h2 style={{ 
              fontSize: "clamp(1.5rem, 4vw, 2rem)", 
              fontWeight: "bold", 
              letterSpacing: "-0.02em", 
              marginBottom: "10px" 
            }}> 
              Dashboard
            </h2>
            <p style={{ textAlign: "center" }}> Use the dashboard to view tasks </p>
          </Grid>
          <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center">
            <Image 
              src={dashboardshot} 
              alt="screenshot of dashboard" 
              width={650}
            
              style={{
                borderRadius: "8px",
                boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                width: '100%',
                height: 'auto',
                marginBottom: "20px",
              }} 
            />
          </Grid>
        </Grid>
      </section>
      <section style={{ margin: "20px", padding: "20px" }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center">
            <Image 
              src={taskboardshot} 
              alt="screenshot of task board" 
              width={650}
             
              style={{
                borderRadius: "8px",
                boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                width: '100%',
                height: 'auto',
                marginBottom: "20px",
              }} 
            />
          </Grid>
          <Grid item xs={12} sm={6} container direction="column" justifyContent="center" alignItems="center">
            <h2 style={{ 
              fontSize: "clamp(1.5rem, 4vw, 2rem)", 
              fontWeight: "bold", 
              letterSpacing: "-0.02em", 
              marginBottom: "10px" 
            }}> 
              TaskBoard
            </h2>
            <p style={{ textAlign: "center" }}> Use the task board to view tasks </p>
          </Grid>
        </Grid>
      </section>
    </>
  );
}
