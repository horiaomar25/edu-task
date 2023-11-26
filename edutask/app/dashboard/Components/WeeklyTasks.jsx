
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const WeeklyTasks = () => {
 
 
   
        return (
          <Box sx={{ flexGrow: 1, flexDirection: "column", margin: "30px" }}>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={8} sx={{border: "1px solid black" }}>
                <h1>xs=8</h1>
              </Grid>
              <Grid item xs={8} sx={{border: "1px solid black" }}>
                <h1>xs=8</h1>
              </Grid>
            </Grid>
          </Box>
        );
      

  
}

export default WeeklyTasks