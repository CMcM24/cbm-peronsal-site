import { MyColors } from '@/Theme/themeUtilities';
import useScreenSize from '@/Theme/useScreenSize';
import { Box, Stack, Typography } from '@mui/material';
import logo from '../../images/logo.png';
import Image from 'next/image';

const MobileBar = () => {
  const { checkIfSmaller } = useScreenSize();
  if (!checkIfSmaller('isMD')) return <></>;
  return (
    <Box
      style={{
        position: 'relative',
        top: 0,
        width: '100vw',
        height: 64,
        zIndex: 99,
        opacity: 1,
        backgroundColor: MyColors.mediumPurple,
      }}
    >
      <Stack
        direction={'row'}
        spacing={1}
        // justifyContent="center"
        alignItems="center"
      >
        <Image
          src={logo}
          alt="logo_image"
          width={64}
          height={64}
          style={{ borderRadius: 50 }}
        />
        <Typography variant="h5">Colin McMahon</Typography>
      </Stack>
    </Box>
  );
};

export default MobileBar;
