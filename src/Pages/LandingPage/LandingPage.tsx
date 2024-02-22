import { Box, Button, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import logo from '../../images/logo.png';
import Image from 'next/image';
import AboutMeSlide from '@/Components/Slides/AboutMeSlide';
import './index.css';
import PortfolioSlide from '@/Components/Slides/PortfolioSlide';
import ContactSlide from '@/Components/Slides/ContactSlide';
import useScreenSize from '@/Theme/useScreenSize';

const LandingPage = () => {
  const [selectedBox, setSelectedBox] = useState<number>(0);
  const [hoveredBox, setHoveredBox] = useState<number>(0);

  const bgPosition = ['left', 'center', 'right'];
  const slideTitles = ['About Me', 'Portfolio', 'Contact'];
  const { isXS, isSM, isMD, isLG, isXL } = useScreenSize();

  return (
    <>
      <Box className="landingPageBox">
        <Typography
          variant="h3"
          className="logoTitle"
          style={{
            opacity: !selectedBox ? 1 : 0,
          }}
        >
          <Image src={logo} alt="logo_image" width={200} height={200} />
        </Typography>
        <Stack
          direction={'row'}
          spacing={20}
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
                    ? '60%'
                    : hoveredBox === boxIndex
                    ? '7.5%'
                    : '5%',
                backgroundColor: ['#3afca5', '#01cbae', '#2082a6'][
                  boxIndex - 1
                ],
                boxShadow: '5px 0 40px #5f2a84, -5px 0 40px #5f2a84',
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
                    selectedBox === boxIndex ? '200% 100%' : '1000% 100%',
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
                        paddingLeft: '24px',
                        paddingTop: '12px',
                      }}
                    >
                      <Button
                        variant="text"
                        color="black"
                        onClick={() => setSelectedBox(0)}
                        style={{
                          color: ['#2082a6', '#2082a6', '#3afca5'][
                            boxIndex - 1
                          ],
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
                    <Box className={'slideBox'}>
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
                            color: ['#2082a6', '#3afca5', '#01cbae'][
                              boxIndex - 1
                            ],
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
