import { useEffect, useState } from 'react';
import SlideCard from './SlideCard';
import './index.css';
import { Typography } from '@mui/material';

const PortfolioSlide = () => {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setFadeIn(true);
    return setFadeIn(false);
  }, []);
  return (
    <SlideCard
      title="Portfolio"
      body={
        <div>
          <Typography variant="h5">Professional</Typography>
          <ul style={{ paddingLeft: '32px' }}>
            <li><a href='https://www.mbshighway.com'>MBS Highway</a></li>
          </ul>
          <Typography variant="h5">Current</Typography>
          <ul style={{ paddingLeft: '32px' }}>
            <li>This site. </li>
          </ul>
        </div>
      }
    />
  );
};
export default PortfolioSlide;
