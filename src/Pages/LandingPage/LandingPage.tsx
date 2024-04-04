import AboutMeSlide from '@/Components/Slides/AboutMeSlide';
import ContactSlide from '@/Components/Slides/ContactSlide';
import PortfolioSlide from '@/Components/Slides/PortfolioSlide';
import { MyColors } from '@/Theme/themeUtilities';
import useScreenSize from '@/Theme/useScreenSize';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { Box, Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import logo from '../../images/logo.png';
import './index.css';
import LogoImg from '@/Components/LogoImg/LogoImg';
import MobileBar from '@/Components/MobileBar/MobileBar';

const LandingPage = () => {
  const [selectedBox, setSelectedBox] = useState<number>(0);
  const [hoveredBox, setHoveredBox] = useState<number>(0);

  const bgPosition = ['left', 'center', 'right'];
  const slideTitles = ['About Me', 'Portfolio', 'Contact'];
  const { isXS, isSM, screensize, checkIfSmaller } = useScreenSize();

  const closeDropFocus = () => {
    setSelectedBox(0);
    setHoveredBox(0);
    document.activeElement instanceof HTMLElement &&
      document.activeElement.blur();
  };

  const getBackgroundImgSize = () => {
    switch (screensize) {
      case 'isXS':
        return '750% 100%';
      case 'isSM':
        return '600% 100%';
      case 'isMD':
        return '500% 100%';
      case 'isLG':
        return '300% 100%';
      case 'isXL':
        return '200% 100%';
    }
  };
  const getSpacing = () => {
    switch (screensize) {
      case 'isXS':
        return 3;
      case 'isSM':
        return 5;
      case 'isMD':
        return 8;
      case 'isLG':
        return 15;
      case 'isXL':
        return 20;
    }
  };

  const defaultWidthMap = {
    isXS: '30%',
    isSM: '20%',
    isMD: '15%',
    isLG: '10%',
    isXL: '5%',
  };
  const hoveredWidthMap = {
    isXS: '200%',
    isSM: '200%',
    isMD: '15%',
    isLG: '7.5%',
    isXL: '7.5%',
  };

  return (
    <>
      <Box className="landingPageBox">
        <LogoImg isRendered={selectedBox} />
        <MobileBar />
        <Stack
          direction={'row'}
          spacing={getSpacing()}
          justifyContent="center"
          alignItems="center"
          style={{ height: '100%' }}
        >
          {[1, 2, 3].map((boxIndex) => (
            <Box
              key={boxIndex}
              onClick={
                selectedBox !== boxIndex
                  ? () => setSelectedBox(boxIndex)
                  : undefined
              }
              onMouseOver={() => setHoveredBox(boxIndex)}
              onMouseLeave={() => setHoveredBox(0)}
              style={{
                zIndex: 2,
                position: 'relative',
                height: '100%',
                width:
                  selectedBox === boxIndex
                    ? checkIfSmaller('isMD')
                      ? isXS
                        ? '800%'
                        : '300%'
                      : '60%'
                    : hoveredBox === boxIndex
                    ? hoveredWidthMap[screensize]
                    : defaultWidthMap[screensize],
                backgroundColor: [
                  MyColors.lightGreen,
                  MyColors.mediumGreen,
                  MyColors.darkGreen,
                ][boxIndex - 1],
                boxShadow: `5px 0 40px ${MyColors.richPurple}, -5px 0 40px ${MyColors.richPurple}`,
                transition: 'width 0.3s, opacity 0.3s',
                transform: 'scaleX(1)',
                opacity: 1,
                overflow: 'hidden',
                cursor: selectedBox !== boxIndex ? 'pointer' : 'default',
              }}
            >
              <Box
                className="backgroundImage"
                style={{
                  zIndex: -1,
                  backgroundSize:
                    selectedBox === boxIndex
                      ? getBackgroundImgSize()
                      : '1000% 100%',
                  backgroundPosition: bgPosition[boxIndex - 1],
                  opacity: selectedBox === boxIndex ? 0.4 : 0,
                }}
              ></Box>
              {selectedBox === boxIndex ? (
                <>
                  <Stack
                    direction={'column'}
                    style={{ position: 'absolute', zIndex: 0 }}
                    spacing={3}
                  >
                    <Typography
                      variant="h3"
                      style={{
                        color: 'black',
                        paddingLeft: isXS || isSM ? '6px' : '24px',
                        paddingTop: isXS || isSM ? '3px' : '12px',
                      }}
                    >
                      <Button
                        variant="text"
                        color="black"
                        onClick={closeDropFocus}
                        style={{
                          color: MyColors.richPurple,
                          fontWeight: 700,
                          opacity: 1,
                        }}
                      >
                        <ArrowBackIosNewRoundedIcon
                          style={{ cursor: 'pointer' }}
                        />
                        Close
                      </Button>
                    </Typography>
                  </Stack>
                  <Stack
                    direction={'column'}
                    style={{ position: 'relative', zIndex: -1, opacity: 1 }}
                    spacing={3}
                  >
                    <Box
                      className={'slideBox'}
                      style={
                        checkIfSmaller('isMD')
                          ? { paddingLeft: 16, paddingRight: 16 }
                          : {}
                      }
                    >
                      {boxIndex === 1 && <AboutMeSlide />}
                      {boxIndex === 2 && <PortfolioSlide />}
                      {boxIndex === 3 && <ContactSlide />}
                    </Box>
                  </Stack>
                </>
              ) : (
                <Stack direction={'column'} className="slideTitleStack">
                  {slideTitles[boxIndex - 1].split('').map((char) => {
                    return (
                      <>
                        <div
                          style={{
                            color: [
                              MyColors.darkGreen,
                              MyColors.lightGreen,
                              MyColors.mediumGreen,
                            ][boxIndex - 1],
                          }}
                        >
                          {char.toUpperCase()}
                        </div>
                        <br />
                      </>
                    );
                  })}
                </Stack>
              )}
            </Box>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default LandingPage;
