"use client";
import * as React from 'react';
import { Box } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%', // Default to full width for small screens
  maxWidth: '700px', // Max width for large screens

  // Media queries for responsive design
  [theme.breakpoints.up('lg')]: {
    width: '60%', // 60% width for large screens and up
  },
  [theme.breakpoints.up('md')]: {
    width: '60%', // 80% width for medium screens
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%', // Full width for small screens
    padding: theme.spacing(0), // Adjust padding for smaller screens
    justifyContent: 'center', // Center the calendar on small screens
  },

  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'flex-end', // Ensure the calendar is pushed to the right
  borderRadius: '8px',
  backgroundColor: theme.palette.background.paper,
  paddingRight: theme.spacing(4), // Add padding to push content to the right
  boxSizing: 'border-box', // Ensure padding and border are included in the width

  '& .MuiCalendarPicker-root': {
    borderBottom: '1px solid #e0e0e0',
    margin: 0,
    padding: 0,
  },
  '& .MuiPickersCalendarHeader-root': {
    borderBottom: '1px solid #e0e0e0',
    margin: 0,
    padding: 0,
  },
}));

export default function Calendar() {
  return (
    <StyledBox data-testid="calendar">
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        localeText={{
          calendarWeekNumberHeaderText: '#',
          calendarWeekNumberText: (weekNumber) => `${weekNumber}.`,
        }}
      >
        <DateCalendar
          displayWeekNumber
          sx={{
            width: '100%', // Ensure the calendar takes the full width
            height: '100%',
            margin: 0,
            padding: 0,
          }}
        />
      </LocalizationProvider>
    </StyledBox>
  );
}
