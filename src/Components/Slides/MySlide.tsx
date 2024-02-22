import { Box, Stack, Typography } from '@mui/material';
import { ReactNode, useEffect, useState } from 'react';
import './index.css';

const MySlide = ({
  title,
  body,
}: {
  title: string;
  body: string | JSX.Element | ReactNode;
}) => {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setFadeIn(true);
    return setFadeIn(false);
  }, []);
  return (
    <>
      <Typography variant="h3" className="aboutMeTitle">
        {title}
      </Typography>
      <Box className="aboutMeBox">
        <Stack direction="row">
          <Typography variant="body1">{body}</Typography>
        </Stack>
      </Box>
    </>
  );
};
export default MySlide;
