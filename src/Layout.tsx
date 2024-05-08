import { Grid } from '@mui/material';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  // main layout that takes all screen using material ui grid
  return (
    <>
      <Grid direction="column" justifyContent="center" alignItems="center" container>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </>
  );
}
