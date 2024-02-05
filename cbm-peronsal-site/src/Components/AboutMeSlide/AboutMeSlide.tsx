import { Box, Typography } from '@mui/material';

const AboutMeSlide = () => {
  return (
    <>
      <Typography variant="h3" style={{ paddingBottom: '16px', color:"rgba(95,42,132)" }}>
        About Me
      </Typography>
      <Box
        style={{
          position: 'relative',
          padding: '16px',
          borderRadius: 5,
          backgroundColor: 'rgba(95,42,132, 0.75)',
          width: '100%',
          // height: "800px",
          color: 'white',
        }}
      >
        Testing stuff
      </Box>
    </>
  );
};
export default AboutMeSlide;
