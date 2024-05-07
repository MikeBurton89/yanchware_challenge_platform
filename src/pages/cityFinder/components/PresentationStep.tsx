import { Grid, Typography } from '@mui/material';


const PresentationStep = () => {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center"> 
      <Grid item>
        <Typography variant="h5" color="#0788d9" gutterBottom>
          We are going to ask you a few questions about your preferences
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PresentationStep;
