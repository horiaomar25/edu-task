import React, { useState } from 'react';
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

 const firstSixTask = tasks.slice(0, 4);

    return (
        <div data-testid="dashboard-table">
        <TableContainer component={Paper} style={{ overflowX: 'hidden' }}  >
            <Table sx={{ minWidth: 620 }} aria-label="caption table">
                <caption>A basic table example with a caption</caption>
                <TableHead>
                    <TableRow>
                        <TableCell>Task</TableCell>
                        <TableCell align="center">Type</TableCell>
                        <TableCell align="center">Completed</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {firstSixTask.map((task) => (
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
