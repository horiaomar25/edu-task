import React from 'react';
import Link from 'next/link';
import homepageimage from '../public/homelogo.png';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '../public/female-avatar.png';


export default function Home() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                
              }}
            >
              <div style={{border: '1px solid black', padding: '200px', boxShadow: '0 4px 5px'}}>
              <h2> EduTask</h2>
              <Image src={Avatar} alt="Avatar" width={50} style={{ borderRadius:'50%'}} />
              
       <Link href="/dashboard">
                <Button variant="contained" sx={{ backgroundColor:'black', width: '100%'}}>Login</Button>
              </Link>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
