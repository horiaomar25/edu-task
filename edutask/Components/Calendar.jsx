import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function Calendar() {
  return (
    <div data-testid="calendar">
    <section style={{ border: "solid black 0.5px", borderRadius: "10px", width: "100%"}} >
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
          '& .Mui-selected': {
            backgroundColor: '#7632B1',
            '&:hover': {
              backgroundColor: '#7632B1',
            },
          },
        }}
      />
    </LocalizationProvider>
    </section>
    </div>
  );
}