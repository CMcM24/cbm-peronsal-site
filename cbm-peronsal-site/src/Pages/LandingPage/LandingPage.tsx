import { Box, Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import logo from '../../images/logo.png';
import Image from 'next/image';
import AboutMeSlide from '@/Components/AboutMeSlide/AboutMeSlide';

const LandingPage = () => {
  const [selectedBox, setSelectedBox] = useState<number>(0);
  const [hoveredBox, setHoveredBox] = useState<number>(0);

  return (
    <>
      <Box
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(88, 72, 148, 1)',
          zIndex: 2,
        }}
      >
        <Typography
          variant="h3"
          style={{
            color: 'white',
            position: 'absolute',
            transition: 'opacity 0.3s',
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
                style={{
                  zIndex: 1,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/007/632/073/large_2x/dots-mesh-wave-digital-background-illustration-vector.jpg")`,
                  backgroundSize:
                    selectedBox === boxIndex ? '200% 100%' : '1000% 100%',
                  backgroundPosition: bgPosition[boxIndex - 1],
                  opacity: selectedBox === boxIndex ? 0.4 : 0,
                  transition: 'opacity 0.3s, background-size 0.3s',
                }}
              >
                {selectedBox === boxIndex ? (
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
                      >
                        <ArrowBackIosNewRoundedIcon
                          style={{ cursor: 'pointer' }}
                        />
                        Close
                      </Button>
                    </Typography>
                  </Stack>
                ) : (
                  <></>
                )}
              </Box>
              {selectedBox === boxIndex ? (
                <Stack
                  direction={'column'}
                  style={{ position: 'relative', zIndex: 0 }}
                  spacing={3}
                >
                  <Box
                    style={{
                      zIndex: 0,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      opacity: selectedBox === boxIndex ? 1 : 0,
                      transition: 'opacity 0.3s',
                      color: 'black',
                      paddingLeft: '48px',
                      paddingRight: '48px',
                      paddingTop: '80px',
                    }}
                  >
                    {boxIndex === 1 && <AboutMeSlide />}
                    {boxIndex === 2 && <AboutMeSlide />}
                    {boxIndex === 3 && <AboutMeSlide />}
                  </Box>
                </Stack>
              ) : null}
            </Box>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default LandingPage;

const bgPosition = ['left', 'center', 'right'];
const slideContent = [<AboutMeSlide key={1} />, <></>, <></>];
