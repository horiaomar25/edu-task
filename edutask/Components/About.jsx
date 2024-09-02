import React from 'react';
import { Typography, Box } from '@mui/material';
import info from '../assets/info.png';
import Image from 'next/image';

const About = () => {
  return (
    <>
      <Typography
        variant='h2'
        sx={{
          fontSize: { xs: '2.5rem', md: '2rem', lg: '2.5rem' }, // Adjust font size for different screen sizes
          textAlign: 'center',
          marginTop: { xs: '-60px', md: '-160px', lg: '-78px' }, // Adjust margin for different screen sizes
          
        }}
      >
        About
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          margin: '1.8rem',
          flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' },
          alignItems: 'center', // Center items vertically in column layout
        }}
      >
        <Box
          component="p"
          sx={{
            lineHeight: '1.6',
            margin: { xs: '0.5rem 0', md: '0 1.5rem 0 0' }, // Adjust margins for different screen sizes
            textAlign: { xs: 'left', md: 'left' }, // Center text on small screens, left-align on larger screens
            maxWidth: { xs: '100%', md: '50%' }, // Full width on small screens, half width on larger screens
            fontSize: { xs: '0.9rem', md: '1rem', lg: '1.2rem' }, // Adjust font size for different screen sizes
          }}
        >
          EduTask is a user-friendly tool designed to streamline the management of weekly and daily tasks for teaching assistants. It simplifies the process of organizing and prioritizing work, making the hectic pace of school life more manageable. Education Support did a report on the importance of time management for teaching assistants, and EduTask was created to address the challenges they face.
          <br />
          By using EduTask, teaching assistants can enhance their productivity, stay on top of their responsibilities, and accomplish more throughout the school week with ease.
        </Box>
        <Box
          sx={{
            width: { xs: '100%', sm: '80%', md: '60%', lg: '50%' }, // Adjust width for different screen sizes
            maxWidth: '700px', // Limit the maximum width
            height: 'auto', // Maintain aspect ratio
          }}
        >
          <Image
            src={info}
            alt="information graphic from report"
            layout="responsive"
            width={700}
            height={500}
          />
        </Box>
      </Box>
    </>
  );
};

export default About;