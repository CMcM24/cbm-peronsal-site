import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const AboutMeSlide = () => {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setFadeIn(true);
    return setFadeIn(false);
  }, []);
  return (
    <>
      <Typography
        variant="h3"
        style={{
          paddingBottom: '16px',
          color: `rgba(95,42,132)`,
          transition: 'opacity 0.3s',
        }}
      >
        About Me
      </Typography>
      <Box
        style={{
          position: 'relative',
          padding: '16px',
          borderRadius: 5,
          backgroundColor: `rgba(95,42,132, 0.75)`,
          width: '100%',
          color: 'white',
          transition: 'opacity 0.3s',
          fontSize: 24,
        }}
      >
        Full Stack Web Developer with 4 years of Front-End Development
        experience in a Scrum/Agile development workflow, with a prior
        background in Sales and Security. Has a passion for work that combines
        technical know-how with a creative spirit in order to produce effective
        and easy to use applications.
      </Box>
    </>
  );
};
export default AboutMeSlide;
