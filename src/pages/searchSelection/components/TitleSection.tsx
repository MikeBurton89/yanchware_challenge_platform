import { Box, Typography } from '@mui/material';
 const TitleSection = () => {
    return(
        <Box sx={{ p: '2rem' }}>
        <Typography color="#0a57a3" variant="h3" align="center" gutterBottom>
          Hi Digital Nomads!
        </Typography>
        <Typography color="#0788d9" variant="h5" align="center" gutterBottom>
          Let us help you find your next destination!
        </Typography>
      </Box>
    )
}

export default TitleSection;