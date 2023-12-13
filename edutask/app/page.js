import React from 'react';
import Link from 'next/link';
import homepageimage from '../public/homelogo.png';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Home() {
  return (
    <Box
      style={{
        marginTop: '80px',
     
        width:'70%',
        margin:'auto',
        padding:'20px',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              textAlign: 'center', // Center the text
            }}
          >
            <h2 style={{ fontSize: '50px' }}> Welcome to EduTask</h2>
            <p>
              {' '}
              A task manager that helps teachers and teaching assistants keep track of tasks
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                flexWrap: 'wrap',
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
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              src={homepageimage}
              alt="illustration of using taskboard"
              width={300} // Set a smaller width for mobile view
              height={270} // Set a smaller height for mobile view
              style={{ boxShadow: '5px 5px 10px #888888', marginTop: '50px'}}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
