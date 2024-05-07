import { useSearchParamsAsState } from '../../../hooks/useSearchParamsAsState';
import FormLayout from './FormLayout';
import { InputLabel, Slider } from '@mui/material';
import  mockedCityDetails  from '../../../mocks/mockedCityDetails.json';
import { getMinAndMaxFromJson } from '../../../utils/utilsFunctions';

const InternetSpeedStep = () => {
  const { searchParams, handleAddParams } = useSearchParamsAsState();
  const {min, max} = getMinAndMaxFromJson({json: mockedCityDetails, property: 'internetSpeed', subProperty: 'download'});

  return (
    <FormLayout question= 'What is the minimum speed you would accept for your internet connection?'>
      <InputLabel id="internet-speed">Internet Speed</InputLabel>
      <Slider
        value={
          searchParams.get('internetSpeed')
            ? parseInt(searchParams.get('internetSpeed') as string)
            : 0
        }
        onChange={(_, value) => handleAddParams('internetSpeed', value.toString())}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={min}
        max={max}
      />
    </FormLayout>
  );
};

export default InternetSpeedStep;
