import { Grid, Typography } from '@mui/material';
type CityDetailComponentProps = {
  title: string;
  content: JSX.Element;
};
export const CityDetailComponent = ({ title, content }: CityDetailComponentProps) => {
  return (
    <Grid item xs={12} sm={6} key={title}>
      <Typography color="primary" variant="h5">
        {title}
      </Typography>
      {content}
    </Grid>
  );
};
