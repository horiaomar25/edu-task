import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CompletedCard = ({task, completedTask}) => {

  
  return (
    <>
      <div>
        <CardContent
          sx={{
            borderRadius: "8px",
            boxShadow:
              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
            marginBottom: "20px",
          }}
        >
          <Typography
            variant="h5"
            component="div"
         sx={{ marginBottom: "10px", textDecoration: 'line-through'}}
          >
            {task.task_name}
          </Typography>

          <Typography variant="body2"  sx={{ marginBottom: "10px", textDecoration: 'line-through'}}>{task.task_description}</Typography>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              flexDirection: "row",
              
            }}
          ></div>
        </CardContent>
      </div>
    </>
  );
};

export default CompletedCard;
