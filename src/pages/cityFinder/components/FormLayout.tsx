import { FormControl, Grid, Typography } from '@mui/material';
import React from 'react';

type FormLayoutProps = {
  children: React.ReactNode;
  question?: string;
};

const FormLayout = ({ children, question }: FormLayoutProps) => {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
      <Grid item >
        <Typography variant="h5" color="#0788d9" gutterBottom>
          {question ? question : ''}
        </Typography>
      </Grid>
      <Grid item width={'100%'}>
        <FormControl fullWidth>{children}</FormControl>
      </Grid>
    </Grid>
  );
};

export default FormLayout;
