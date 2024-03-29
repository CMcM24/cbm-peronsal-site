import { useEffect, useState } from 'react';
import SlideCard from './SlideCard';
import './index.css';

const ContactSlide = () => {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setFadeIn(true);
    return setFadeIn(false);
  }, []);
  return <SlideCard title="Contact Me" body={<div></div>} />;
};
export default ContactSlide;
