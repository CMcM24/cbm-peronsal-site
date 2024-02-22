import { useEffect, useState } from 'react';
import MySlide from './MySlide';
import './index.css';

const ContactSlide = () => {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setFadeIn(true);
    return setFadeIn(false);
  }, []);
  return <MySlide title="Contact Me" body={<div></div>} />;
};
export default ContactSlide;
