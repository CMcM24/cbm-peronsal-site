// import { Box, Stack } from '@mui/material';
// import { useState } from 'react';

// const LandingPage = () => {
//   const [hoveredBox, setHoveredBox] = useState<number>(0);

//   const handleMouseEnter = (boxIndex: number) => {
//     setHoveredBox(boxIndex);
//   };

//   const handleMouseLeave = () => {
//     setHoveredBox(0);
//   };

//   return (
//     <Box style={{ width: '100vw', height: '100vh', backgroundColor: '#222222' }}>
//       <Stack
//         direction={'row'}
//         spacing={20}
//         justifyContent="center"
//         alignItems="center"
//         style={{ height: '100%' }}
//       >
//         {[1, 2, 3].map((boxIndex) => (
//           <Box
//             key={boxIndex}
//             onMouseEnter={() => handleMouseEnter(boxIndex)}
//             onMouseLeave={handleMouseLeave}
//             style={{
//               height: '100%',
//               width: '5%',
//               backgroundColor: ['#FF0066', '#00FF66', '#0066FF'][boxIndex - 1],
//               boxShadow: '5px 0 40px #000000, -5px 0 40px #000000',
//               transition: 'transform 0.3s, opacity 0.3s',
//               transform: hoveredBox === boxIndex ? 'scaleX(4) translate3d(0, 0, 0)' : 'scaleX(1)',
//               opacity: hoveredBox === boxIndex ? 0.5 : 1,
//             }}
//           ></Box>
//         ))}
//       </Stack>
//     </Box>
//   );
// };

// export default LandingPage;

import { Box, Stack } from '@mui/material';
import { useState } from 'react';

const LandingPage = () => {
  const [hoveredBox, setHoveredBox] = useState(null);

  const handleMouseEnter = (boxIndex) => {
    setHoveredBox(boxIndex);
  };

  const handleMouseLeave = () => {
    setHoveredBox(null);
  };

  return (
    <Box
      style={{ width: '100vw', height: '100vh', backgroundColor: '#222222' }}
    >
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
            onMouseEnter={() => handleMouseEnter(boxIndex)}
            onMouseLeave={handleMouseLeave}
            style={{
              zIndex: 2,
              position: 'relative',
              height: '100%',
              width: '5%',
              backgroundColor: ['#FF0066', '#00FF66', '#0066FF'][boxIndex - 1],
              boxShadow: '5px 0 40px #000000, -5px 0 40px #000000',
              transition: 'transform 0.3s, opacity 0.3s',
              transform: hoveredBox === boxIndex ? 'scaleX(4)' : 'scaleX(1)',
              opacity: 1,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                zIndex: 0,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/007/632/073/large_2x/dots-mesh-wave-digital-background-illustration-vector.jpg")`,
                backgroundSize:
                  hoveredBox === boxIndex ? '500% 100%' : '1000% 100%',
                backgroundPosition: bgPosition[boxIndex - 1],
                opacity: hoveredBox === boxIndex ? 0.5 : 0,
                transition: 'opacity 0.3s, background-size 0.3s',
              }}
            ></div>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default LandingPage;

const bgPosition = ['left', 'center', 'right'];
