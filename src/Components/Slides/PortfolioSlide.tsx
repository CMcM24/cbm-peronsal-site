import { useEffect, useState } from 'react';
import SlideCard from './SlideCard';
import './index.css';

const PortfolioSlide = () => {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setFadeIn(true);
    return setFadeIn(false);
  }, []);
  return <SlideCard title="Portfolio" body={<div></div>} />;
};
export default PortfolioSlide;
