
import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';

const WeeklyTasks = () => {
 
 
   
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', margin: '30px', width: '50%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ border: '1px solid black', marginBottom: '10px' }}>
              <h1>Daily</h1>
            </Grid>
            <Grid item xs={12} sx={{ border: '1px solid black', marginTop: '10px' }}>
              <h1>Weekly</h1>
            </Grid>
          </Grid>
        </Box>
        )
      

  
}

export default WeeklyTasks