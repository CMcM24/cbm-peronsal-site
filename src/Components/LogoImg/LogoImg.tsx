import useScreenSize from '@/Theme/useScreenSize';
import { Typography } from '@mui/material';
import logo from '../../images/logo.png';
import Image from 'next/image';
import './index.css';

const LogoImg = ({ isRendered }: { isRendered: number }) => {
  const { checkIfSmaller } = useScreenSize();
  if (checkIfSmaller('isMD')) return <></>;
  return (
    <Typography
      variant="h3"
      className="logoIMG"
      style={{
        opacity: !isRendered ? 1 : 0,
      }}
    >
      <Image src={logo} alt="logo_image" width={200} height={200} />
    </Typography>
  );
};

export default LogoImg;
