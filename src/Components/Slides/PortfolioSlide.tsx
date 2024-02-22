import { useEffect, useState } from 'react';
import MySlide from './MySlide';
import './index.css';

const PortfolioSlide = () => {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setFadeIn(true);
    return setFadeIn(false);
  }, []);
  return <MySlide title="Portfolio" body={<div></div>} />;
};
export default PortfolioSlide;
