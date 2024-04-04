import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import prolfilePhoto from '../../images/wedding1.jpg';
import Image from 'next/image';
import './index.css';
import SlideCard from './SlideCard';
import useScreenSize from '@/Theme/useScreenSize';

const AboutMeSlide = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const { isXS } = useScreenSize();
  useEffect(() => {
    setFadeIn(true);
    return setFadeIn(false);
  }, []);
  return (
    <SlideCard
      title="About Me"
      body={
        <div>
          <Image
            src={prolfilePhoto}
            alt="profile_image"
            className="slideCardImage"
            style={isXS ? { float: 'none' } : {}}
          />
          {isXS && <br />}
          My name is Colin McMahon. I grew up in central Jersey. In 2010 I set
          off to college and attended Norwich University up in Northfield, VT.
          There I tool part in their Corps of Cadet program, where I lived a
          military barracks lifestyle and got an NROTC education as well as my
          B.A. in Criminal Justice.
          <br />
          <br />
          After graduation I planned on pursuing a career in law enforcement,
          but initially ended up working for a company called G4S Secure
          Solutions in a role as a Site Security Manager for a corporate banking
          office building. I worked there for two years, until I found myself
          desiring to find a new challenge. I ended up accepting a job as a Tech
          Salesman for a company called SHI International. My customer base
          copmprised of all Texas Local Government accounts. I worked there for
          another 2 years, selling everything from printer ink cartridges to
          complete county-wide data center overhauls.
          <br />
          <br />I found myself losing interest in the sales part of the job, but
          found a growing interest in the tech and software itself. I learned
          that Rutgers University hosted a Full Stack Coding Bootcamp right near
          my at the time, and I decided to enroll. After 6 months of 3hr classes
          3 days a week, I completed the bootcamp and got a job as a Front End
          React Developer. I'm now a Front End Developer with 4 years of
          experience and looking for a new exciting challenge nad an opportunity
          to grow and develop as a developer.
          <br />
          <br />
          My professional skills and experience include: React.js, Next.js,
          TypeScript/JavaScript, Data Visualization (Amcharts), Agile
          Development, Atlassian Tools (Jira, bitbucket, etc), Giuthub,
          Git/Gitbash, Figma, Unit Testing (Jest, React Testing Library),
          Node.js, OOP, Functional Programming in React, Exposure to Azure and
          AWS Cloud, MySQL, Mentoring, Management, Leadership, Communication
        </div>
      }
    />
  );
};
export default AboutMeSlide;
