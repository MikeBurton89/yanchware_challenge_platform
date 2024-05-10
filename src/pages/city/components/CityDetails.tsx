import { Grid, Typography } from '@mui/material';
import { CityDetail, coworkingSpace } from '../../../types';
import { camelCaseToTitleCase } from '../../../utils/utilsFunctions';
import { CityDetailComponent } from './CityDetailComponent';

type CityDetailsProps = {
  cityDetails: CityDetail;
};

const CityDetails = ({ cityDetails }: CityDetailsProps) => {
  // TODO: Find a less verbose way to render the city details
  const renderCityDetails = () => {
    return Object.entries(cityDetails)
      .filter(([key]) => {
        return key !== 'cityId' && key !== 'cityName';
      })
      .map(([key, value]) => {
        if (key === 'internetSpeed' || key === 'climate') {
          return (
            <CityDetailComponent
              key={key}
              title={camelCaseToTitleCase(key)}
              content={
                <Grid container spacing={1}>
                  {Object.entries(value).map(([subKey, subValue]) => (
                    <Grid item xs={12} key={subKey}>
                      <Typography variant="body1">{`${subKey}: ${subValue}`}</Typography>
                    </Grid>
                  ))}
                </Grid>
              }
            />
          );
        }
        if (key === 'coworkingSpaces') {
          return (
            <CityDetailComponent
              key={key}
              title={key}
              content={
                <Grid container spacing={1}>
                  {Array.isArray(value) &&
                    value.map((coworkingSpace: coworkingSpace, index: number) => (
                      <Grid item xs={12} key={index}>
                        <Typography variant="body1">{coworkingSpace.name}</Typography>
                        <Typography variant="body1">{coworkingSpace.address}</Typography>
                        <Typography variant="body1">{`Rating: ${coworkingSpace.rating}`}</Typography>
                      </Grid>
                    ))}
                </Grid>
              }
            />
          );
        }

        return (
          <CityDetailComponent
            key={key}
            title={camelCaseToTitleCase(key)}
            content={
              <Typography variant="body1" color="">
                {String(value)}
              </Typography>
            }
          />
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
