import { Grid, Typography } from '@mui/material';
import { CityDetail } from '../../../types';

type CityDetailsProps = {
  cityDetails: CityDetail;
};

const CityDetails = ({ cityDetails }: CityDetailsProps) => {
  const renderCityDetails = () => {
    return Object.entries(cityDetails).map(([key, value]) => {
      // Exclude cityId and coworkingSpaces from rendering
      if (key === 'cityId') return null;

      // Special handling for internetSpeed and climate objects
      if (key === 'internetSpeed' || key === 'climate') {
        return (
          <Grid item xs={12} sm={6} key={key}>
            <Typography color='primary' variant="h5">{key}</Typography>
            <Grid container spacing={1}>
              {Object.entries(value).map(([subKey, subValue]) => (
                <Grid item xs={12} key={subKey}>
                  <Typography variant="body1">{`${subKey}: ${subValue}`}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        );
      }
      if(key === 'coworkingSpaces') {
        return (
          <Grid item xs={12} sm={6} key={key}>
            <Typography color='primary' variant="h5">{key}</Typography>
            <Grid container spacing={1}>
              {value?.map((coworkingSpace, index) => (
                <Grid item xs={12} key={index}>
                  <Typography variant="body1">{coworkingSpace.name}</Typography>
                  <Typography variant="body1">{coworkingSpace.address}</Typography>
                  <Typography variant="body1">{`Rating: ${coworkingSpace.rating}`}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        );
      }

      // For other details
      return (
        <Grid item xs={12} sm={6} key={key}>
          <Typography color="primary" variant="h5">
            {key}
          </Typography>
          <Typography variant="body1" color="">
            {value}
          </Typography>
        </Grid>
      );
    });
  };

  return (
    <Grid container spacing={2} justifyContent="start">
      {renderCityDetails()}
    </Grid>
  );
};

export default CityDetails;
