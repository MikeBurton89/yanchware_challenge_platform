import { Grid, Typography } from '@mui/material';
import React from 'react';

const PresentationStep = () => {
  return (
    // using material ui grid to center the content give me a Step 1 title and a description
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
