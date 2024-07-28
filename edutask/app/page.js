import React from 'react';
import Link from 'next/link';
import homepageimage from '../public/homelogo.png';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navigation from './Navigation';
import dashboardshot from "../assets/dashboardshot.png"
import taskboardshot from "../assets/taskboardshot.png"

export default function Home() {
  return (
    <>
      <Navigation />
      <h1 style={{ 
        fontSize: "7rem", 
        textAlign: "center", 
        fontWeight: "bold", 
        marginTop: "0.5rem", // Adjusted margin top to reduce space
        marginBottom: "1rem", 
        letterSpacing: "-0.02em" 
      }}>
        Edu
        <span style={{ 
          paddingBottom: "1rem", 
          background: "linear-gradient(to right, #8e24aa, #673ab7)", 
          WebkitBackgroundClip: "text", 
          color: "transparent" 
        }}>
          Task
        </span>
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          marginBottom: '2rem',
        }}
      >
        <Link href="/dashboard">
          <Button
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
      <p style={{ textAlign: "center", marginTop: "1rem" }}>
        Simplify task management for teaching assistants, enhancing productivity and organization for a smoother school week.
      </p>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ border: "2px solid black", borderRadius: "10px", width: "100%", height: "200px", position: "relative", backgroundColor: "#8e24aa" }}>
              <span style={{ border: "1px solid black", width: "100%", height: "2px", display: "block", position: "absolute", top: "10%" }}></span>
              <h5 style={{ textAlign: "center", marginTop: "100px", color: "white" }}>Daily</h5>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ border: "2px solid black", borderRadius: "10px", width: "100%", height: "200px", position: "relative", backgroundColor: "#8e24aa" }}>
              <span style={{ border: "1px solid black", width: "100%", height: "2px", display: "block", position: "absolute", top: "10%" }}></span>
              <h5 style={{ textAlign: "center", marginTop: "100px", color: "white" }}>Weekly</h5>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <section style={{
       
        margin: "20px", 
        padding: "20px"
      }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Grid item xs={12} sm={6} md={6} container direction="column" justifyContent="center" alignItems="center">
            <h2 style={{ 
              fontSize: "4rem", 
              textAlign: "center", 
              fontWeight: "bold", 
              marginTop: "1rem", 
              marginBottom: "1rem", 
              letterSpacing: "-0.02em" 
            }}> 
              Dashboard
            </h2>
            <p style={{ textAlign:"center" }}> Use the dashboard to view tasks </p>
          </Grid>
          <Grid item xs={12} sm={6} md={6} container justifyContent="center" alignItems="center">
            <Image 
              src={dashboardshot} 
              alt="screenshot of dashboard" 
              width={650}
              style={{
                borderRadius: "8px",
                boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                marginBottom: { xs: "20px", md: "0" },
              }} 
            />
          </Grid>
        </Grid>
      </section>

      <section style={{
  margin: "20px", 
  padding: "20px"
}}>
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} style={{ maxWidth: "1200px", margin: "0 auto" }}>
    <Grid item xs={12} sm={6} md={6} container justifyContent="center" alignItems="center">
      <Image 
        src={taskboardshot} 
        alt="screenshot of dashboard" 
        width={650}
        style={{
          borderRadius: "8px",
          boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
          marginBottom: { xs: "20px", md: "0" },
        }} 
      />
    </Grid>
    <Grid item xs={12} sm={6} md={6} container direction="column" justifyContent="center" alignItems="center">
      <h2 style={{ 
        fontSize: "4rem", 
        textAlign: "center", 
        fontWeight: "bold", 
        marginTop: "1rem", 
        marginBottom: "1rem", 
        letterSpacing: "-0.02em" 
      }}> 
        TaskBoard
      </h2>
      <p style={{ textAlign:"center" }}> Use the dashboard to view tasks </p>
    </Grid>
  </Grid>
</section>

    </>
  );
}
