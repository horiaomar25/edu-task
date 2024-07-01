import React from 'react';
import Link from 'next/link';
import homepageimage from '../public/homelogo.png';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Navigation from './Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <h1 style={{ fontSize: "7rem", textAlign: "center", fontWeight: "bold", marginTop: "1rem", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
        Edu
        <span style={{ paddingBottom: "1rem", background: "linear-gradient(to right, #8e24aa, #673ab7)", WebkitBackgroundClip: "text", color: "transparent" }}>
          Task
        </span>
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          marginBottom: '2rem', // Adjusted margin bottom to reduce space
        }}
      >
        <Link href="/dashboard">
          <Button
            sx={{
              backgroundColor: '#8338ec',
              color: 'white',
              width: '200px',
              borderRadius: '10px',
              '&:hover': {
                backgroundColor: '#6b2fbb',
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
              backgroundColor: '#8338ec',
              color: 'white',
              width: '200px',
              borderRadius: '10px',
              '&:hover': {
                backgroundColor: '#6b2fbb',
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
    </>
  );
}
