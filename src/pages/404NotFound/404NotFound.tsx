import InnerLayout from '../../components/InnerLayout';
import { Typography } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';

const NotFound = () => {
  return (
    <InnerLayout
      header={
        <Header/>
      }
      footer={
        <Footer/>
      }
    >
      <Typography variant="h5" color="#0788d9">
        These are not the droids you are looking for.
      </Typography>
    </InnerLayout>
  );
};

export default NotFound;
