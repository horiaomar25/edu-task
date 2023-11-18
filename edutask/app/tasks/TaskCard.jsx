import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
const TaskCard = () => {
  return (
    <>
    <Card sx={{ minWidth: 275, margin: '8px'}}>
      <CardContent>
       
        <Typography variant="h5" component="div">
       
        </Typography>
       
        <Typography variant="body2">
         
        </Typography>

         <Typography sx={{ mb: 1.5 }} color="text.secondary">
    
        </Typography>

      </CardContent>
      {/* <CardActions></CardActions> */}
       {/* chip to placed in here*/}
      
    </Card>
    </>
  )
    
  
}
{/* <div style={{border: '1px solid #ccc', paddingLeft: '30px', margin: '10px', borderRadius: '8px',  boxShadow:'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'}}> 
    <button style={{background: 'transparent', border: 'none', float:'right' }}>X</button>
    <h3> Hello world</h3>
   
    <p>This is a test card.
      This is a test card.
      This is a test card.
      This is a test card.
      This is a test card.</p>
    </div> */}

export default TaskCard