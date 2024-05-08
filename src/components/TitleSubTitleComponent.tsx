import { Typography } from '@mui/material';

type TitleSubTitleComponentProps = {
  title: string;
  subtitle: string;
};

const TitleSubTitleComponent = ({ title, subtitle }: TitleSubTitleComponentProps) => {
  return (
    <>
      <Typography color="#0a57a3" variant="h4" align="center" gutterBottom>
        {title}
      </Typography>
      <Typography color="text.secondary" variant="h5" align="center" gutterBottom>
        {subtitle}
      </Typography>
    </>
  );
};

export default TitleSubTitleComponent;
