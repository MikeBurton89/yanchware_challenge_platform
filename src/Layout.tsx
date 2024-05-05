import { Grid } from '@mui/material';
import NavBar from './components/NavBar';


type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  // main layout that takes all screen using material ui grid
  return (
    <>
      <NavBar />
      <Grid
        direction="row"
        justifyContent="center"
        alignItems="center"
        width={'100dvw'}
        height={'100dvh'}
        container
      >
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </>
  );
}
