import React from 'react';
import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import scribble from '../assets/scribble.png';
import hero from '../assets/hero.jpg';
import background from '../assets/backgroundimage.png'; 


const HeroSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Set the height of the hero section
        backgroundImage: `url(${background.src})`, // Set the background image
        backgroundSize: 'cover', // Cover the entire area
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Prevent the image from repeating
        marginTop: '-60px', // Move the Box up by 20px
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: '2.5rem',
          textAlign: 'center',
          fontWeight: 'extrabold',
          margin: '0.5rem 0',
          letterSpacing: '-0.02em',
        marginTop: '-20px', // Move the Box up by 20px

          
          
        }}
      >
        Task Management for Teaching Assistants:
        <br />
        Make School Life
        <br />
        Easier
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '0', // Ensure no margin at the top
            paddingTop: '0', // Ensure no padding at the top
          }}
        >
          <Image src={scribble} alt="scribble" width={380} height={20} />
        </Box>
      </Typography>
      
      <Image src={hero} alt="heroimage"  quality={100} width={500} style={{ marginTop: '20px' }} />
    </Box>
  );
};

export default HeroSection;
