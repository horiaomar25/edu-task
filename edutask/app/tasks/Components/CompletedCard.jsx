import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from '@mui/icons-material/Delete';

const CompletedCard = ({task, delTask}) => {
  // Delete Task
  const handleDelete = () => {
    // Implement deletion logic and pass task ID to delTask function
    delTask(task.id);
  };
  
  return (
    <CardContent
      sx={{
        position: 'relative',
        borderRadius: "8px",
        boxShadow:
          "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",

            marginBottom: "30px",
            width: '100%'
      }}
    >
      <div style={{ position: 'relative' }}>
        <Typography
          variant="h5"
          component="div"
          sx={{ marginBottom: "10px", textDecoration: 'line-through' }}
        >
          {task.task_name}
        </Typography>

        <Typography variant="body2" sx={{ marginBottom: "10px", textDecoration: 'line-through' }}>{task.task_description}</Typography>

        <button
          style={{
            position: 'absolute',
            bottom: '-20px',
            right: '5px',
            border: "none",
            background: "transparent",
            fontWeight: "600",
            fontSize: "15px",
          }}
          onClick={handleDelete}
        >
          <DeleteIcon fontSize='small' sx={{ margin: '5px' }} />
        </button>
      </div>
    </CardContent>
  );
};

export default CompletedCard;
