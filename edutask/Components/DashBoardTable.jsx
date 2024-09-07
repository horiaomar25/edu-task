import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from next/link
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import Slide from '@mui/material/Slide';
import Alert from '@mui/material/Alert';
import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button'; // Import Button component
import { Box } from '@mui/material';

export default function DashBoardTable({ tasks = [], completedTasks }) {
    const getTypeStyle = (taskType) => {
        switch (taskType) {
            case 'Daily':
                return { borderColor: 'blue', color: 'blue' }; // Blue for Daily tasks
            case 'Weekly':
                return { borderColor: 'green', color: 'green' }; // Green for Weekly tasks
            default:
                return {};
        }
    };

    const [alertOpen, setAlertOpen] = useState(false);
    const [hiddenTasks, setHiddenTasks] = useState([]);

    const handleTaskComplete = (taskId) => {
        completedTasks(taskId);
        setAlertOpen(true);
        setHiddenTasks((prev) => [...prev, taskId]); // Hide task row after completion
        setTimeout(() => {
            setAlertOpen(false);
        }, 5000); // Adjust the time for alert display
    };

    const handleCloseAlert = () => {
        setAlertOpen(false);
    };

    // Extend the number of tasks displayed
    const numberOfTasksToDisplay = 10; // Adjust this number as needed
    const tasksToDisplay = tasks.slice(0, numberOfTasksToDisplay);

    return (
        <div data-testid="dashboard-table">
            <TableContainer
                component={Paper}
                sx={{
                    overflowX: 'hidden',
                    width: {
                        xs: '100%', // Full width on extra-small screens
                        sm: '90%',  // 90% width on small screens
                        md: '80%',  // 80% width on medium screens
                        lg: '900px',  // 70% width on large screens
                        xl: '900px' // Max width of 900px on extra-large screens
                    },
                    maxWidth: '900px', // Max width for larger screens
                    margin: '0 auto', // Center horizontally
                }}
            >
                <Table sx={{ minWidth: 620 }} aria-label="tasks table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Task</TableCell>
                            <TableCell align="center">Type</TableCell>
                            <TableCell align="center">Completed</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasksToDisplay.map((task) => (
                            <Slide
                                direction="up"
                                in={!hiddenTasks.includes(task.id) && !task.completed}
                                mountOnEnter
                                unmountOnExit
                                key={task.id}
                            >
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {task.task_name}
                                    </TableCell>
                                    <TableCell align="center">
                                        <Chip
                                            label={task.task_type}
                                            variant="outlined"
                                            style={getTypeStyle(task.task_type)}
                                        />
                                    </TableCell>
                                    <TableCell align="center">
                                        <Checkbox
                                            checked={task.completed}
                                            onClick={() => handleTaskComplete(task.id)}
                                            color="success"
                                        />
                                    </TableCell>
                                </TableRow>
                            </Slide>
                        ))}
                    </TableBody>
                </Table>
                
                <Slide direction="up" in={alertOpen} mountOnEnter unmountOnExit>
                    <Alert
                        severity="success"
                        onClose={handleCloseAlert}
                        sx={{
                            position: 'fixed',
                            bottom: '20px',
                            left: '20px',
                            zIndex: 9999,
                        }}
                    >
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            Completed
                            <DoneIcon fontSize="small" sx={{ margin: '5px' }} />
                        </span>
                    </Alert>
                </Slide>
            </TableContainer>
        </div>
    );
}
