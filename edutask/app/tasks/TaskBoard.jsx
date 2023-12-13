"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TaskCard from "./TaskCard";
import CompletedCard from "./CompletedCard";



// eslint-disable-next-line react/prop-types
const TaskBoard = ({ tasks, taskList, delTask, completeTask}) => {

  const dailyTasks = tasks.filter(
    (task) => task.task_type === "Daily" && !task.completed);
  const weeklyTasks = tasks.filter(
    (task) => task.task_type === "Weekly" && !task.completed);
  const completedTasks = tasks.filter((task) => task.completed === true);

 

  return (
    <>
      <Box sx={{ flexGrow: 1, margin: "20px" }}>
        {/* set the flex-grow to 1, allowing the box to grow to fill the avaliable space*/}
        <Grid container spacing={4}>
          {/*Container with spacing between grid items to 3.*/}
          {/* Daily Column */}
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              padding: "20px",
              height: { xs: "auto", sm: "50%", md: "800px" }, // Responsive height for all screen sizes
              width: { xs: "100%", sm: "50%", md: "800px" }, // Responsive width for all screen sizes
              maxWidth: { xs: "100%", sm: "50%", md: "800px" }, // Max width for md screen
              boxSizing: "border-box", // Adds padding to the grid without changing width and height.
             

               
            }}
          >
            <h2 style={{ textAlign: "center" }}>Daily</h2>

            {/* Heading centered within each column  */}

            {dailyTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                taskList={taskList}
                delTask={delTask}
                completedTask={completeTask}
              />
            ))}
          </Grid>
          {/* Weekly Column */}
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              padding: "20px",
              height: { xs: "auto", sm: "50%", md: "800px" }, // Responsive height
              width: { xs: "100%", sm: "50%", md: "800px" }, // Responsive width
              maxWidth: { xs: "100%", sm: "50%", md: "800px" }, // Max width for md screen
              boxSizing: "border-box",
            }}
          >
            <h2 style={{ textAlign: "center" }}>Weekly</h2>

            {weeklyTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                taskList={taskList}
                delTask={delTask}
                completedTask={completeTask}
              />
            ))}
          </Grid>
          {/* Completed Column */}
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              padding: "20px",
              height: { xs: "auto", sm: "400px", md: "800px" }, // Responsive height
              width: { xs: "100%", sm: "50%", md: "800px" }, // Responsive width
              maxWidth: { xs: "100%", sm: "50%", md: "800px" }, // Max width for md screen
              boxSizing: "border-box",
            }}
          >
            <h2 style={{ textAlign: "center" }}>Completed</h2>
            {completedTasks.map((task) => (
              <CompletedCard key={task.id} task={task} taskList={taskList} completedTask={completeTask} delTask={delTask} />
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TaskBoard;
